<script>
  /**
   * 水波图
   * @module extension/charts/other/xdh-waterwave
   *
   * @example
   *
   * <xdh-waterwave title="未办结案件占比" :height="188" :percent="23"></xdh-waterwave>
   *
   * import XdhWaterwave from 'extension/charts/other/xdh-waterwave'
   *
   */
  export default {
    name: 'XdhWaterwave',
    components: {},
    data() {
      // 默认颜色对标 Echarts 默认色组
      const defaultColor = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
      const themeColor = typeof this.theme === 'string' ? this.theme : (this.theme.color && this.theme.color[0])
      return {
        timer: null,
        node: null,
        radio: 1,
        color: themeColor || defaultColor[0]
      }
    },
    /**
     * 属性参数 props
     * @property {string} title  数据名称
     * @property {number} [height = 160] 图形高度
     * @property {number} [percent = 0] 数据占比量
     * @property {object/string} theme 主题颜色,两种方式：1.直接引入src/widgets/xdh-echarts/themes , 2.直接传入一个色值字符串，如：'red' '#d48265'
     */
    props: {
      title: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        default: 160
      },
      percent: {
        type: Number,
        default: 0
      },
      theme: {
        type: [Object, String],
        default() {
          return {}
        }
      }
    },
    methods: {
      resize() {
        const height = this.height;
        const offsetWidth = this.$refs.root.parentNode;
        this.radio = offsetWidth < height ? offsetWidth / height : 1
      },
      draw() {
        const data = this.percent / 100;
        const color = this.color;
        const self = this;
        if (!this.node || (data !== 0 && !data)) {
          return false
        }

        const canvas = this.node;
        const ctx = canvas.getContext('2d');

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const radius = canvasWidth / 2;
        const lineWidth = 2;
        const cR = radius - lineWidth;

        ctx.beginPath();
        ctx.lineWidth = lineWidth * 2;

        const axisLength = canvasWidth - lineWidth;
        const unit = axisLength / 8;
        const range = 0.2; // 振幅
        let currRange = range;
        const xOffset = lineWidth;
        let sp = 0; // 周期偏移量
        let currData = 0;
        const waveupsp = 0.005; // 水波上涨速度

        let arcStack = [];
        const bR = radius - lineWidth;
        const circleOffset = -(Math.PI / 2);
        let circleLock = true;

        for (let i = circleOffset; i < circleOffset + 2 * Math.PI; i += 1 / (8 * Math.PI)) {
          arcStack.push([radius + bR * Math.cos(i), radius + bR * Math.sin(i)]);
        }

        const cStartPoint = arcStack.shift();
        ctx.strokeStyle = color;
        ctx.moveTo(cStartPoint[0], cStartPoint[1]);

        // 绘制填充块
        function drawSin() {
          ctx.beginPath();
          ctx.save();

          const sinStack = [];
          for (let i = xOffset; i <= xOffset + axisLength; i += 20 / axisLength) {
            const x = sp + (xOffset + i) / unit;
            const y = Math.sin(x) * currRange;
            const dx = i;
            const dy = 2 * cR * (1 - currData) + (radius - cR) - unit * y;

            ctx.lineTo(dx, dy);
            sinStack.push([dx, dy]);
          }

          const startPoint = sinStack.shift();

          ctx.lineTo(xOffset + axisLength, canvasHeight);
          ctx.lineTo(xOffset, canvasHeight);
          ctx.lineTo(startPoint[0], startPoint[1]);

          const gradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(1, color);
          ctx.fillStyle = gradient;
          ctx.fill();
          ctx.restore();
        }

        // 渲染
        function render() {
          ctx.clearRect(0, 0, canvasWidth, canvasHeight);
          // 渲染弧形
          if (circleLock) {
            if (arcStack.length) {
              const temp = arcStack.shift();
              ctx.lineTo(temp[0], temp[1]);
              ctx.stroke();
            } else {
              circleLock = false;
              ctx.lineTo(cStartPoint[0], cStartPoint[1]);
              ctx.stroke();
              arcStack = null;

              ctx.globalCompositeOperation = 'destination-over';
              ctx.beginPath();
              ctx.lineWidth = lineWidth;
              ctx.arc(radius, radius, bR, 0, 2 * Math.PI, 1);

              ctx.beginPath();
              ctx.save();
              ctx.arc(radius, radius, radius - 3 * lineWidth, 0, 2 * Math.PI, 1);

              ctx.restore();
              ctx.clip();
              ctx.fillStyle = color;
            }
          } else {
            if (data >= 0.85) {
              if (currRange > range / 4) {
                const t = range * 0.01;
                currRange -= t;
              }
            } else if (data <= 0.1) {
              if (currRange < range * 1.5) {
                const t = range * 0.01;
                currRange += t;
              }
            } else {
              if (currRange <= range) {
                const t = range * 0.01;
                currRange += t;
              }
              if (currRange >= range) {
                const t = range * 0.01;
                currRange -= t;
              }
            }
            if (data - currData > 0) {
              currData += waveupsp;
            }
            if (data - currData < 0) {
              currData -= waveupsp;
            }

            sp += 0.07;
            drawSin();
          }
          self.timer = requestAnimationFrame(render);
        }

        render()
      }
    },
    render(h) {
      // const radio = this.radio
      const height = this.height
      const title = this.title
      const percent = this.percent
      return h('div',
        {
          'class': 'waterWave',
          ref: 'root',
          style: {
            // transform: `scale(${radio})`,
            height: height + 'px',
            width: height + 'px'
          }
        },
        [
          h('div',
            {
              style: {
                width: '100%',
                height: '100%',
                overflow: 'hidden'
              }
            },
            [
              h(
                'canvas',
                {
                  'class': 'waterWaveCanvasWrapper',
                  ref: 'waterwave',
                  attrs: {
                    width: height * 2,
                    height: height * 2
                  }
                }
              )
            ]),
          h(
            'div',
            {
              'class': 'waterWave_text',
              style: {
                width: height
              }
            },
            [
              title && h('span', {}, [title]),
              h('h4', {}, [percent + '%'])
            ]
          )
        ])
    },
    mounted() {
      this.node = this.$refs.waterwave
      this.draw()
      this.resize()

      window.addEventListener('resize', this.resize);
    },
    destroyed() {
      cancelAnimationFrame(this.timer);
      window.removeEventListener('resize', this.resize);
    }
  }
</script>
