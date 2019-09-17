export const simpleToolConf = {
  toolbarGroups: [
    { name: 'styles', groups: [ 'styles' ] },
    { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
    { name: 'links', groups: [ 'links' ] },
    { name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
    { name: 'paragraph', groups: [ 'list', 'blocks', 'indent', 'align', 'bidi', 'paragraph' ] },
    { name: 'clipboard', groups: [ 'undo', 'clipboard' ] },
    { name: 'insert', groups: [ 'insert' ] },
    { name: 'forms', groups: [ 'forms' ] },
    { name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
    { name: 'colors', groups: [ 'colors' ] },
    { name: 'tools', groups: [ 'tools' ] },
    { name: 'others', groups: [ 'others' ] },
    { name: 'about', groups: [ 'about' ] }
  ],
  removeButtons: 'Styles,Font,FontSize,About,Maximize,ShowBlocks,TextColor,BGColor,Flash,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Unlink,Anchor,BidiLtr,BidiRtl,Language,JustifyBlock,JustifyRight,JustifyCenter,JustifyLeft,CreateDiv,Indent,Outdent,RemoveFormat,CopyFormatting,Underline,Strike,Subscript,Superscript,Form,Radio,Checkbox,TextField,Textarea,Select,Button,ImageButton,HiddenField,Scayt,SelectAll,Find,Replace,Cut,Copy,Templates,Save,Source,NewPage,Preview,Print,Paste,PasteText,PasteFromWord'
}

export const baseImgConf = function(uploadServ) {
  return {
    removePlugins: 'easyimage',
    extraPlugins: 'image2',
    filebrowserUploadUrl: uploadServ,
    uploadUrl: uploadServ
  }
}
