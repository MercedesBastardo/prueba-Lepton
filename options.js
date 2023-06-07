
// Opcion 1 de la vida
  const optionOneSel = document.querySelector('.classOptionOne');
  const btnOptionOne = document.getElementById('optionOne');
  const btnClose = document.getElementById('btnClose')

  var optionOne = () => {
    optionOneSel.style.display= "flex"
  } 
  btnOptionOne.addEventListener('click', () => { optionOne })
  var closeOptionOne = () => {
    optionOneSel.style.display= "none"
  }
  btnClose.addEventListener('click', () => {closeOptionOne} )
//Opción dos de la vida
const optionTwoSel = document.querySelector('.classOptionTwo');
const btnOptionTwo = document.getElementById('optionTwo');
const btnCloseTwo = document.getElementById('btnCloseTwo')

var optionTwo = () => {
  optionTwoSel.style.display= "flex"
} 
btnOptionTwo.addEventListener('click', () => { optionTwo })
var closeOptionTwo = () => {
  optionTwoSel.style.display= "none"
}
btnCloseTwo.addEventListener('click', () => {closeOptionTwo} )


//Opcion 3 de la vida
const optionTreeSel = document.querySelector('.classOptionTree');
const btnOptionTree = document.getElementById('optionTree');
const btnCloseTree = document.getElementById('btnCloseTree')

var optionTree = () => {
  optionTreeSel.style.display= "flex"
} 
btnOptionTree.addEventListener('click', () => { optionTree })
var closeOptionTree = () => {
  optionTreeSel.style.display= "none"
}
btnCloseTree.addEventListener('click', () => {closeOptionTree} )

