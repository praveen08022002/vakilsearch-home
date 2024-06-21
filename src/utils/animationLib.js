const animationlib = {
    placeholderAnimation: function (selector_target, text_list, reset) {
      function typeWriter(
        selector_target,
        text_list,
        placeholder = reset,
        i = 0,
        text_list_i = 0,
        delay_ms = 100,
      ) {
        if (!placeholder) {
          return;
        } else {
          let referencedTarget = selector_target.current;
  
          if (!i) {
            if (placeholder) {
              referencedTarget !== null
                ? (referencedTarget.placeholder = '')
                : '';
            } else {
              referencedTarget !== null ? (referencedTarget.innerHTML = '') : '';
            }
          }
          let txt = text_list[text_list_i];
          if (i < txt.length) {
            if (placeholder) {
              referencedTarget !== null
                ? (referencedTarget.placeholder += txt.charAt(i))
                : '';
            } else {
              referencedTarget !== null
                ? (referencedTarget.innerHTML += txt.charAt(i))
                : '';
            }
            i++;
            setTimeout(
              typeWriter,
              delay_ms,
              selector_target,
              text_list,
              placeholder,
              i,
              text_list_i,
            );
          } else {
            text_list_i++;
            if (typeof text_list[text_list_i] === 'undefined') {
              setTimeout(
                typeWriter,
                delay_ms * 10,
                selector_target,
                text_list,
                placeholder,
              );
            } else {
              i = 0;
              setTimeout(
                typeWriter,
                delay_ms * 10,
                selector_target,
                text_list,
                placeholder,
                i,
                text_list_i,
              );
            }
          }
        }
      }
      typeWriter(selector_target, text_list);
    },
  };
  export default animationlib;
  