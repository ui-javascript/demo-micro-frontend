<script>
  import XdhCropper from '@/widgets/xdh-cropper'
  export default {
    components: {
      XdhCropper
    },
    data() {
        return {
          img:'',
          img1:require('D/assets/hamburger.png'),
          img2:''
        }
      },
    methods: {
      handleCrop(file) {
        console.log(file)
      }
    }
  }
</script>

## ImageCropper 图片编辑器

### 基础用法
:::demo
```html
<template>
  <xdh-cropper v-model="img" @crop="handleCrop"></xdh-cropper>
  <xdh-cropper v-model="img1" @crop="handleCrop"></xdh-cropper>
   <xdh-cropper v-model="img2" @crop="handleCrop" :width="200" :height="200"></xdh-cropper>
</template>

<script>
  import XdhCropper from '@/widgets/xdh-cropper'
  export default {
    components: {
      XdhCropper
    },
    data() {
        return {
          img:'',
          img1:require('D/assets/hamburger.png'),
          img2:''
        }
      },
    methods: {
      handleCrop(file) {
        console.log(file)
      }
    }
  }
</script>
<style lang="scss" scoped>
.xdh-cropper {
 margin: 10px;
}
</style>
```
:::

