import React, { useEffect } from 'react';

const EmbeddedForm = () => {
  useEffect(() => {
    const loadMailerLiteScript = () => {
      if (!window.ml) {
        (function(w, d, e, u, f, l, n) {
          w[f] = w[f] || function() {
            (w[f].q = w[f].q || []).push(arguments);
          };
          l = d.createElement(e);
          l.async = 1;
          l.src = u;
          l.onload = () => {
            console.log('MailerLite script loaded.');
            window.ml = window.ml || function() {
              (window.ml.q = window.ml.q || []).push(arguments);
            };
            window.ml('account', '1015778');
            console.log('MailerLite initialized.');
          };
          n = d.getElementsByTagName(e)[0];
          n.parentNode.insertBefore(l, n);
        })(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
      } else {
        window.ml('account', '1015778');
        console.log('MailerLite already initialized.');
      }
    };

    loadMailerLiteScript();
  }, []);

  return (
    <div className="ml-embedded" data-form="co8JGn"></div>
  );
};

export default EmbeddedForm;
