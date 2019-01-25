export const content = {
  sample1: `<h2><strong><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">组件引用</span></span></strong></h2>
<blockquote>
<div><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">&lt;xdh-editor ref=&quot;myEditor&quot;&nbsp; cus-id=&quot;test1&quot;&nbsp;:options=&quot;opt&quot;&nbsp; v-model=&quot;editorHTML&quot; @on-change=&quot;edChangeHandle&quot; @on-upload=&quot;uploadHandle&quot;&gt;&lt;/xdh-editor&gt;</span></span>&nbsp;</div>
</blockquote>
<div><strong>设置唯一ID</strong></div>
<blockquote>
<div>使用组件时， 必须通过 props.cusID 传入 当前组件实例的唯一ID（不能重复）。 否则组件初始化失败。</div>
</blockquote>
<div><strong><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">参数设置</span></span></strong></div>
<blockquote>
<div><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">:options：{uiColor: &#39;#429ED0&#39;, height: &#39;100&#39;} // 为组件的配置项，此处配置 背景色 和 高度</span></span></div>
</blockquote>
<div><strong><span style="font-size:12px"><span style="font-family:Arial,Helvetica,sans-serif">数据绑定&nbsp;</span></span></strong></div>
<blockquote>
<div>v-model=&ldquo;editorHTML&rdquo; 实现编辑内容双向绑定</div>
<div>编辑时自动派发 自定义 &quot;on-change&quot; 事件， 监听编辑内容</div>
<div>调用 内部 &ldquo;getData()&rdquo;&nbsp; 函数 获取编辑内容</div>
</blockquote>`,
  sample2: `<p><strong>简化版toolbar</strong></p>
<blockquote>
<p>:simple = true&nbsp; 可以使用 为本组件 定制的 简化版toolbar配置， 配置文件在 xdh-editor/ckeditor/config.js 中定义</p>
</blockquote>
<p><strong>&nbsp;定义图片服务器地址（baseUpload属性）</strong></p>
<blockquote>
<p>在正式使用组件时，建议（必须）配合服务端图片提供的上传接口使用（将图片上传的api作为属性&ldquo;baseUplade&rdquo;的传值）</p>
<p>配置&ldquo;baseUpload&rdquo;属性， 组件会自行配置以下两个ckeditor的配置项：</p>
<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">{<br />
&nbsp; filebrowserUploadUrl: uploadServ,<br />
&nbsp;uploadUrl: uploadServ<br />
}</div>
<p>以上配置 实现 图片直接拖拽至编辑内容展示，图片CtrlV+CtrlC的复制粘贴， 点击工具栏图片进行图片上传</p>
</blockquote>
<p><strong>&nbsp;PS: 服务端 图片上传API接口的设计&nbsp;</strong></p>
<blockquote>
<p>ckeditor 的图片上传方式 会以 表单的 post 形式 向服务端 提交图片文件；</p>
<p>ckeditor 的图片上传表单 的 &ldquo;name&rdquo; 为 &ldquo;upload&rdquo;；</p>
<p>ckeditor 图片上传的 &quot;request.file&quot; 为 上传至服务端的图片（base64）</p>
<p>服务端在接收到图片后完成保存后，请返回 result 的&nbsp; json格式如下：</p>
<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px"><span style="font-family:Arial,Helvetica,sans-serif">res.json({<br />
&nbsp; &nbsp; uploaded: 1, // 1表示成功 0 表示失败<br />
&nbsp; &nbsp; fileName: file.filename,//获取文件名<br />
&nbsp; &nbsp; url: 'http://192.168.0.34:3000/upload/201805071417.png' // 在编辑内容中图片的显示url<br />
})</span></div>
</blockquote>
`,
  sample3: `<h2><strong>自定义toolbar</strong></h2>
<p>ckeditor 有两种 自定义 toolbar 方法（不同的配置项）</p>
<h3><strong>1 . toolbarGroups &amp;&nbsp;removeButtons 例子：</strong></h3>
<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">&nbsp;{&nbsp;<br />
&nbsp; toolbarGroups : [<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ name: &#39;document&#39;, groups: [ &#39;mode&#39;, &#39;document&#39;, &#39;doctools&#39; ] },<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ name: &#39;basicstyles&#39;, groups: [ &#39;basicstyles&#39;, &#39;cleanup&#39; ] },<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ name: &#39;clipboard&#39;, groups: [ &#39;clipboard&#39;, &#39;undo&#39; ] },<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ name: &#39;editing&#39;, groups: [ &#39;find&#39;, &#39;selection&#39;, &#39;spellchecker&#39;, &#39;editing&#39; ] },<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ name: &#39;forms&#39;, groups: [ &#39;forms&#39; ] }&nbsp;<br />
&nbsp; ],<br />
&nbsp;&nbsp;removeButtons : &#39;Flash,Save,NewPage,Preview,Print,Templates,Subscript&#39;<br />
}</div>
<h3><strong>&nbsp;2 . 直接定义 toolbar</strong></h3>
<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">toolbar = [<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;document&#39;, items: [ &#39;Source&#39;, &#39;-&#39;, &#39;Save&#39;, &#39;NewPage&#39;, &#39;Preview&#39;, &#39;Print&#39;, &#39;-&#39;, &#39;Templates&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;clipboard&#39;, items: [ &#39;Cut&#39;, &#39;Copy&#39;, &#39;Paste&#39;, &#39;PasteText&#39;, &#39;PasteFromWord&#39;, &#39;-&#39;, &#39;Undo&#39;, &#39;Redo&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;editing&#39;, items: [ &#39;Find&#39;, &#39;Replace&#39;, &#39;-&#39;, &#39;SelectAll&#39;, &#39;-&#39;, &#39;Scayt&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;forms&#39;, items: [ &#39;Form&#39;, &#39;Checkbox&#39;, &#39;Radio&#39;, &#39;TextField&#39;, &#39;Textarea&#39;, &#39;Select&#39;, &#39;Button&#39;, &#39;ImageButton&#39;, &#39;HiddenField&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&#39;/&#39;,<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;styles&#39;, items: [ &#39;Styles&#39;, &#39;Format&#39;, &#39;Font&#39;, &#39;FontSize&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;colors&#39;, items: [ &#39;TextColor&#39;, &#39;BGColor&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;tools&#39;, items: [ &#39;Maximize&#39;, &#39;ShowBlocks&#39; ] },<br />
&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;{ name: &#39;about&#39;, items: [ &#39;About&#39; ] }<br />
&nbsp;&nbsp; &nbsp;]</div>
<h2><strong>快速生成自定义toolbar 的配置</strong></h2>
<p>开发时， 自行在<strong>&nbsp;</strong><a href="https://ckeditor.com/ckeditor-4">ckeditor-4 官网</a>&nbsp;中下载 ckeditor 包到本地，解压后，打开 &ldquo;samples/toolbarconfigurator/index.html&rdquo; 文件，有可视化的toolbar 配置工具。自行配置 完成后，生成代码即可</p>
<h2><strong>自定义toolbar配置在组件中的使用方式：</strong></h2>
<p>若使用 自定义toolbar配置，xdh-editor的 simple属性 必须不能为&ldquo;true&rdquo;。在导出自定义配置后，在&ldquo;options&rdquo;中 自行添加配置项。</p>
<div style="background:#eeeeee; border:1px solid #cccccc; padding:5px 10px">options: {<br />
&nbsp;<span style="color:#2980b9"> toolbarGroups : [<br />
&nbsp; &nbsp; { name: &#39;document&#39;, groups: [ &#39;mode&#39;, &#39;document&#39;, &#39;doctools&#39; ] },<br />
&nbsp; &nbsp; { name: &#39;clipboard&#39;, groups: [ &#39;clipboard&#39;, &#39;undo&#39; ] },<br />
&nbsp; &nbsp; { name: &#39;editing&#39;, groups: [ &#39;find&#39;, &#39;selection&#39;, &#39;spellchecker&#39;, &#39;editing&#39; ] },<br />
&nbsp; &nbsp; { name: &#39;forms&#39;, groups: [ &#39;forms&#39; ] },<br />
&nbsp; &nbsp; ......<br />
&nbsp; ],<br />
&nbsp; removeButtons : &#39;Flash,Save,NewPage,Preview,Print,Templates ......&#39;,</span><br />
&nbsp; ...other config<br />
}</div>
<p>&nbsp;</p>
`,
  opt3: {
    toolbarGroups : [
      { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
      { name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
      { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
      { name: 'forms', groups: [ 'forms' ] },
      { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
      { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
      { name: 'links', groups: [ 'links' ] },
      { name: 'insert', groups: [ 'insert' ] },
      { name: 'colors', groups: [ 'colors' ] },
      { name: 'tools', groups: [ 'tools' ] },
      { name: 'about', groups: [ 'about' ] },
      { name: 'styles', groups: [ 'styles' ] },
      { name: 'others', groups: [ 'others' ] }
    ],
    removeButtons : 'Flash,Save,NewPage,Preview,Print,Templates,Subscript,Superscript,RemoveFormat,CopyFormatting,Cut,Copy,Paste,PasteText,PasteFromWord,SelectAll,Scayt,Outdent,Indent,BidiLtr,BidiRtl,Language,Anchor,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,About,Maximize,ShowBlocks,Find,Replace,NumberedList,BulletedList,Blockquote,CreateDiv,JustifyLeft,JustifyCenter,JustifyRight,JustifyBlock,Link,Image,TextColor,BGColor,Source'
  }
}
