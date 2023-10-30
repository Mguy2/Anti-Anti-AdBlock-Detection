function removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.remove();
    }
  }
  
  const targetSelectors = [
    'div.adPlacements',
    'div.playerAds',
    'div.auxiliaryUi.messageRenderers.enforcementMessageViewModel',
    'tp-yt-paper-dialog',
  ];
  
  function observeDOM() {
    const targetNode = document.documentElement;
  
    const config = { childList: true, subtree: true };
    const callback = function (mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.addedNodes.length) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              for (const selector of targetSelectors) {
                if (node.matches(selector)) {
                  removeElement(selector);
                }
              }
            }
          }
        }
      }
    };
  
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
  }
  
  observeDOM();
  