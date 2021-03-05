const nav = document.querySelector('nav');
const navBtn = document.querySelector('.hamburger');
const allNavItems = document.querySelectorAll('.nav-item');
const footerYear = document.querySelector('.year');

const handleNav = () => {
	nav.classList.toggle('active');
	navBtn.classList.toggle('is-active');
	handleNavItemsAnimation();
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('active');
			navBtn.classList.remove('is-active');
			item.classList.remove('nav-items-animation');
		});
	});
};
navBtn.addEventListener('click', handleNav);

const handleNavItemsAnimation = () => {
	let delayTime = 0;
	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

const navItemsDelete = () => {
	allNavItems.forEach(item => {
		if (item.classList.contains('nav-items-animation')) {
			item.classList.remove('nav-items-animation');
		}
	});
};

allNavItems.forEach(item => {
	item.addEventListener('click', navItemsDelete);
});

window.addEventListener(
	'wheel',
	a => {
		if (a.ctrlKey === true) a.preventDefault();
	},
	{ passive: false }
);

// Formularz

const nameForm = document.querySelector('#name_form_input');
const emailForm = document.querySelector('#email_form_input');
const textAreaForm = document.querySelector('.contact-form-textarea');
const formBtn = document.querySelector('.contact-form-btn');

const checkName = () => {
	if (
		nameForm.value < 5 ||
		nameForm.value === 'Wpisz Swoje imię i nazwisko!!'
	) {
		nameForm.value = 'Wpisz Swoje imię i nazwisko!!';
	} else {
		nameForm.value = '';
	}
};
const checkEmail = () => {
	if (emailForm.value.indexOf('@') === -1) {
		emailForm.value = 'Wpisz poprawny Adres Email!!';
	} else {
		emailForm.value = '';
	}
};
const checkTextArea = () => {
	if (
		textAreaForm.value < 15 ||
		textAreaForm.value === 'Wpisz treść wiadomości!!'
	) {
		textAreaForm.value = 'Wpisz treść wiadomości!!';
	} else {
		textAreaForm.value = '';
	}
};

formBtn.addEventListener('click', e => {
	e.preventDefault();
	checkName();
	checkEmail();
	checkTextArea();
});
// const showError = (input, msg) => {
//     const formBox = input.parentElement;
//     const errorMsg = formBox.querySelector('.error-text');

//     formBox.classList.add('error');
//     errorMsg.textContent = msg;
// }

// const clearError = (input) => {
//     const formBox = input.parentElement;
//     formBox.classList.remove('error');
// }

// const checkForm = input => {
//     input.forEach(el => {
//         if (el.value === '') {
//             showError(el, el.placeholder)
//         } else {
//             clearError(el)
//         };
//     });
// };

// const checkLength = (input, min) => {
//     if (input.value.length < min) {
//         showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min. ${min} znaków.`)
//     }
// }

// const checkPassword = (pass1, pass2) => {
//     if (pass1.value !== pass2.value) {
//         showError(pass2, 'Hasła do siebie nie pasują.')
//     }
// }

// const checkEmail = email => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//     if (re.test(email.value)) {
//         clearError(email)
//     } else {
//         showError(email, 'E-mail jest niepoprawny')
//     }
// }

// const checkErrors = () => {

//     const allInputs = document.querySelectorAll('.form-box');
//     let errorCount = 0;

//     allInputs.forEach(el => {
//         if (el.classList.contains('error')) {
//             errorCount++
//         }
//     })

//     if (errorCount === 0) {
//         popup.classList.add('show-popup')
//     }
// }

// sendBtn.addEventListener('click', e => {
//     e.preventDefault();

//     checkForm([username, pass, pass2, email])
//     checkLength(username, 3);
//     checkLength(pass, 8);
//     checkPassword(pass, pass2)
//     checkEmail(email);
//     checkErrors()

// })
