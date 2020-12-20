const btn_contacts = document.querySelector(".send_form_cont")

btn_contacts.addEventListener('click', function(event) {
    event.preventDefault();
    popupContacts();
});




const popupContacts = _ => {        
    const popCon = document.createElement('div');
    
    popCon.classList.add('popCon_wrap');

    popCon.innerHTML = `
    
    <div class="popupCon">
    <div class="popupCon_close">close</div>
    <div class="services_head pop_message_head">system <strong>message</strong></div>
	<div class="common_line pop_message"></div>
    Your message has been sent. <br> thank you
    </div>
    
    `;

    document.body.appendChild(popCon);

    const popupContactsClose = function() {
        const btn_close = document.querySelector(".popupCon_close")
        btn_close.addEventListener('click', function(event) {
            popCon.remove();
            
        });

        
    }();
    
    const remove_pop = () => {
        const popCon = document.querySelector(".popCon_wrap");
        if (popCon) {
            console.log(popCon);
            popCon.remove();
        } else {
            return
        }
        
    };

    setTimeout(remove_pop, 3000);

};