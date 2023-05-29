// Begin SideBar
var closeBtn = document.getElementById('btnClose') as HTMLElement;

var closeSideBar = () => {
    const sideBar = document.getElementById('sidebar') as HTMLElement;
    return (sideBar.style.display = 'none' )
}
closeBtn?.addEventListener('click', () => { closeSideBar });
// End SiderBar

// Begin DialogSection
var openDialogBtn = document.getElementById('openDialogBtn') as HTMLElement;

var openDialog = () => {
  const  dialogSection = document.getElementById('dialogSection') as HTMLElement;
    return dialogSection.style.display = 'block';
 }   
openDialogBtn?.addEventListener('click', () => { openDialog })
// End DialogSection

//Begin Canvas
var mouseOver = () => {
  const canvas = document.getElementById('canvas')as HTMLCanvasElement;
  const text= canvas?.getContext('2d');
    if (text) {
      text.font = "bold 20px arial";
      text.textAlign = 'start';
      text.textBaseline = 'middle'
      text.fillStyle = 'aquamarine';
      text.fillText("El mouse esta parado aqui!",30,75);
    }
    canvas?.addEventListener('mouseover', () => { this });
  return text
}

var mouseOut = () =>  {
  const canvas = document.getElementById('canvas')as HTMLCanvasElement;
  const text= canvas?.getContext('2d');
    if (text) {
      text.clearRect(0, 0, canvas.width, canvas.height)
    }
    canvas?.addEventListener('mouseout', () => { this });
  return text
}
    
