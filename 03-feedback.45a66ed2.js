const e=document.querySelector('form.feedback-form input[name="email"]'),t=document.querySelector('form.feedback-form textarea[name="message"]');document.querySelector(".feedback-form").addEventListener("input",(()=>{localStorage.setItem("feedback-form-state",[e.value,t.value])}));const o=localStorage.getItem("f");console.log(o);
//# sourceMappingURL=03-feedback.45a66ed2.js.map
