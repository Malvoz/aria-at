// open "Text Align" menuitem and give the "Text ALign" menu item focus
console.log('[openTextAlignSubMenu][testPageDocument]: ' + testPageDocument);
testPageDocument.querySelectorAll('[role=menuitem]')[1].setAttribute('aria-expanded', 'true');
testPageDocument.querySelectorAll('[role=menuitem]')[1].focus();
