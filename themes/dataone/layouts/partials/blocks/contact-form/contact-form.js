/**
 * contactForm - Functions used for the contact-form block. Functions for
 * submiting the Netlify contact form via ajax and showing the result
 * (sending, success, or error).
 */ 
(function( contactForm, undefined ) {
    
  const contactFormEl = document.querySelector("#contact-form");

  if(contactFormEl){
  
    // Classes and IDs used to select elements
    // Selectors starting the the form
    const fieldSelector = ".contact-form__field";
    const successMsgSelector = ".contact-form__feedback--success";
    const errorMsgSelector = ".contact-form__feedback--error";
    const buttonSelector = "#contact-form-button";
    // Selectors starting at the button
    const buttonTextSelector =  ".button__text";
    const buttonIconSelector = "svg use";
    
    // Classes to add/remove based on status
    const formSendingClass = "contact-form--sending";
    const formErrorClass = "contact-form--error";
    const buttonSendingClass = "button--sending";
    const buttonErrorClass = "button--error";
    const buttonSuccessClass = "button--success";
    
    // Message to show in button based on status
    const errorText = "Error sending message";
    const successText = "Success!";
    
    // The xlink for the icons to show based on status
    // (See the icon block)
    const errorIconXlink = "#alert-octagon";
    const successIconXlink = "#check-circle";
    
    // Form elements that we will modify
    const contactFields = contactFormEl.querySelectorAll(fieldSelector);
    const contactButton = contactFormEl.querySelector(buttonSelector);
    const contactButtonTextEl = contactButton.querySelector(buttonTextSelector);
    const contactButtonIconEl = contactButton.querySelector(buttonIconSelector);
    const successMsg = contactFormEl.querySelector(successMsgSelector);
    const errorMsg = contactFormEl.querySelector(errorMsgSelector);

    // Save the original icon and inner text of the button so that we can re-set it later
    const contactButtonText = contactButtonTextEl.innerHTML;
    const contactButtonIcon = contactButtonIconEl.getAttributeNS('http://www.w3.org/1999/xlink', 'href');
    
    /**    
     * resetFormStyle - Remove all classes, text, and icons that indicate a 
     * status (sending, error, success). Enable all field and buttons.
     */     
    const resetFormStyle = function() {
      // Remove special status classes
      contactFormEl.classList.remove(formErrorClass, formSendingClass);
      contactButton.classList.remove(buttonErrorClass, buttonSuccessClass, buttonSendingClass);
      // Enable buttons & fieldss
      contactButton.disabled = false;
      for (let i = 0; i < contactFields.length; i++) {
        contactFields[i].disabled = false;
      }
      // Reset the button text & icon
      contactButtonTextEl.innerHTML = contactButtonText;
      contactButtonIconEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', contactButtonIcon);
      // Hide error/success messages
      successMsg.setAttribute("aria-hidden", "true");
      errorMsg.setAttribute("aria-hidden", "true");
    };
    
    /**    
     * showFormError - Add classes, text, and icon that give indication that
     * there was an error with sending the form
     */     
    const showFormError = function() {
      contactFormEl.classList.add(formErrorClass);
      contactButton.classList.add(buttonErrorClass);
      contactButtonTextEl.innerHTML = "Error sending message";
      contactButtonIconEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', "#alert-octagon");
      contactButton.disabled = true;
      errorMsg.setAttribute("aria-hidden", "false");
    };
    
    // A fake fetch() function to test the contact form locally.
    // Change the status to test error vs success responses.
    // var fakeFetch = new Promise((resolve, reject) => {
    //   setTimeout(function () {
    //     resolve({ status: 200 })
    //   }, 900);
    // });

    contactFormEl.addEventListener('submit', e => {

      e.preventDefault();
      
      const formData = new FormData(contactFormEl);
      
      // Indicate that the message is sending; disable button & fields
      contactFormEl.classList.add(formSendingClass);
      contactButton.classList.add(buttonSendingClass);
      contactButtonTextEl.innerHTML = "Sending...";
      
      // Disable the button & fields while sending
      contactButton.disabled = true;
      for (let i = 0; i < contactFields.length; i++) {
        contactFields[i].disabled = true;
      }
      
      fetch(contactFormEl.getAttribute('action'), {
          method: 'POST',
          headers: {
            'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: new URLSearchParams(formData).toString()
        })
      // fakeFetch // <--- use for testing instead of ^ fetch(), uncomment the fakeFetch above as well
        .then(function(response){
        
          resetFormStyle();
          
          // Whether there's a success or error, when the form is changed, take away success/error styles
          contactFormEl.addEventListener('keyup', resetFormStyle, {once: true});
          
          // If there is an error
          if (response.status !== 200) {
            console.log('There was a problem sending a message with the contact form. Response:', response);
            showFormError();
            return;
          }
          
          // If the message is sent successfully
          console.log(response);
          contactButton.classList.add(buttonSuccessClass);
          contactButtonTextEl.innerHTML = "Message sent!";
          contactButtonIconEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', successIconXlink);
          contactButton.disabled = true;
          successMsg.setAttribute("aria-hidden", "false");
          
        })
        .catch(function(error){
          console.log('There was an error sending a message with the contact form. Response:', error);
          contactFormEl.addEventListener('keyup', resetFormStyle, { once: true });
          resetFormStyle();
          showFormError();
        });

    });
  }
    
}( window.contactForm = window.contactForm || {} ));
