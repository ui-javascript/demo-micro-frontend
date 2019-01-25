function fileUpload (editor) {
  // console.log(CKEDITOR.dialog)
  return CKEDITOR.dialog.add('xdhimg', function (editor) {
    // console.log('C')
    return {
      title: 'xdh-image',
      minWidth: 250,
      minHeight: 100,
      onLoad: function() {
        console.log('load')
      },
      onShow: function() {
        console.log('show')
      },
      contents: [
        {
          id: 'xdhImg',
          label: 'xdh文件上传',
          title: 'xdh文件上传',
          elements: [
            {
              type: 'text',
              label: 'Test Text 1',
              id: 'testText1',
              'default': 'hello world!'
            }
          ]
        }
      ]
    }
  })
}

CKEDITOR.plugins.add('xdhimg', {
  init: function (editor) {
    editor.addCommand('xdhimg', {exec: function(){
      fileUpload()
    } });  

    editor.ui.addButton('xdhimg', {
      label: '自定义图片上传',
      icon: './icons/image.png',
      // toolbar: 'insert',
      command: 'xdhimg'
    });
  }
})