
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
        edges: { left: false, right: true, bottom: true, top: false },
    
        listeners: {
          move (event) {
            var target = event.target
            var x = (parseFloat(target.getAttribute('data-x')) || 0)
            var y = (parseFloat(target.getAttribute('data-y')) || 0)
            var angle = target.getAttribute('data-angle') || 0;
            target.setAttribute('data-angle', 0);
            // update the element's style
            target.style.width = event.rect.width + 'px'
            target.style.height = event.rect.height + 'px'
            
    
            // translate when resizing from top or left edges
            x += event.deltaRect.left
            y += event.deltaRect.top
    
            target.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + 0 + 'rad' + ')';

          }
        },
        modifiers: [
          // keep the edges inside the parent
          interact.modifiers.restrictEdges({
           
          }),
    
          // minimum size
          interact.modifiers.restrictSize({
            min: { width: 10, height: 10 }
          })
        ],
    
        inertia: false
      })

      interact('.rotation-handle')
      .draggable({
        onstart: function(event) {
          var box = event.target.parentElement;
          var rect = box.getBoundingClientRect();
    
          // store the center as the element has css `transform-origin: center center`
          box.setAttribute('data-center-x', rect.left + rect.width / 2);
          box.setAttribute('data-center-y', rect.top + rect.height / 2);
          // get the angle of the element when the drag starts
          box.setAttribute('data-angle', getDragAngle(event));
        },
        onmove: function(event) {
          var box = event.target.parentElement;
    
          var pos = {
            x: parseFloat(box.getAttribute('data-x')) || 0,
            y: parseFloat(box.getAttribute('data-y')) || 0
          };
    
          var angle = getDragAngle(event);
    
          // update transform style on dragmove
          box.style.transform = 'translate(' + pos.x + 'px, ' + pos.y + 'px) rotate(' + angle + 'rad' + ')';
        },
        onend: function(event) {
          var box = event.target.parentElement;
    
          // save the angle on dragend
          box.setAttribute('data-angle', getDragAngle(event));
        },
      })
    
    function getDragAngle(event) {
      var box = event.target.parentElement;
      var startAngle = parseFloat(box.getAttribute('data-angle')) || 0;
      var center = {
        x: parseFloat(box.getAttribute('data-center-x')) || 0,
        y: parseFloat(box.getAttribute('data-center-y')) || 0
      };
      var angle = Math.atan2(center.y - event.clientY,
        center.x - event.clientX);
    
      return angle - startAngle;
    }
    function dragMoveListener (event) {

      
        var target = event.target
       // target.style.zIndex = "99999999";
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      
        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px) rotate(' + (target.getAttribute('data-angle') || 0) + 'rad' + ')';
      
        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
      }
      
      // this function is used later in the resizing and gesture demos
      window.dragMoveListener = dragMoveListener