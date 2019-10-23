export default function handleImageChange(e) {
  const file = e.target.files[0];
  let formData = new FormData();
  formData.append('file', file);

  //console.log(formData.getAll('file'))
  var reader = new FileReader(); //实例化文件读取对象
    reader.readAsDataURL(file); //将文件读取为 DataURL,也就是base64编码
    reader.onload = (ev) => { //文件读取成功完成时触发
        var dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
        
        document.getElementById('formdata').value = '';
       
        const size =  {
          width: 658,
          height: 1058
        }
        if(size.width>=size.height) {
          if(size.width>=this.state.containerSize.width) {
            size.height = this.state.containerSize.width/size.width*size.height
            size.width = this.state.containerSize.width
          }
        }else {
          if(size.height>=this.state.containerSize.height) {
            size.width = this.state.containerSize.height/size.height*size.width
            size.height = this.state.containerSize.height
          }
        }
        
    }
}