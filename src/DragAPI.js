
import interact from 'interactjs'

interact('.draggable')
    .draggable({
      // disable inertial throwing
      inertia: false,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
        
          endOnly: true
        })
      ],
      // enable autoScroll
      autoScroll: true,
  
      listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,
  
        // call this function on every dragend event
        end: ( event) => {
       //   event.target.style.zIndex="1";
        }
      }
    }).resizable({
        // resize from all edges and corners
        edges: { left: true, right: true, bottom: true, top: true },
    
        listeners: {
          move (event) {
            var target = event.target
            var x = (parseFloat(target.getAttribute('data-x')) || 0)
            var y = (parseFloat(target.getAttribute('data-y')) || 0)
    
            // update the element's style
            target.style.width = event.rect.width + 'px'
            target.style.height = event.rect.height + 'px'
    
            // translate when resizing from top or left edges
            x += event.deltaRect.left
            y += event.deltaRect.top
    
            target.style.transform = 'translate(' + x + 'px,' + y + 'px)'
    
            target.setAttribute('data-x', x)
            target.setAttribute('data-y', y)
            target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
          }
        },
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
           
          }),
    
          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 100, height: 50 }
          })
        ],
    
        inertia: false
      })
    function dragMoveListener (event) {
        var target = event.target
       // target.style.zIndex = "99999999";
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      
        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      
        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
      }
      
      // this function is used later in the resizing and gesture demos
      window.dragMoveListener = dragMoveListener