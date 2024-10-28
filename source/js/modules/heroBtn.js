// export const initHeroBtn = () => {
//   if (document.contains(document.querySelector('.hero__button'))) {
//     document.getElementById('myCheckbox').addEventListener('change', function () {
//       // eslint-disable-next-line no-invalid-this
//       document.getElementById('myButton').disabled = !this.checked;
//     });

//     document.getElementById('myForm').addEventListener('submit', function (event) {
//       if (!document.getElementById('myCheckbox').checked) {
//         event.preventDefault();
//       }
//     });
//   }
// };

export const initHeroBtn = () => {
  const form1 = document.getElementById('form1');
  const form2 = document.getElementById('form2');
  const checkbox1 = document.getElementById('myCheckbox');
  const checkbox2 = document.getElementById('agree2');
  const button1 = document.getElementById('myButton');
  const button2 = document.getElementById('agreeButton2');

  const updateButtonAndCheckboxState = () => {
    const isAnyCheckboxChecked = (checkbox1 && checkbox1.checked) || (checkbox2 && checkbox2.checked);
    if (button1) {
      button1.disabled = !isAnyCheckboxChecked;
    }
    if (button2) {
      button2.disabled = !isAnyCheckboxChecked;
    }

    if (isAnyCheckboxChecked) {
      if (checkbox1) {
        checkbox1.checked = true;
      }
      if (checkbox2) {
        checkbox2.checked = true;
      }
    } else {
      if (checkbox1) {
        checkbox1.checked = false;
      }
      if (checkbox2) {
        checkbox2.checked = false;
      }
    }
  };

  if (checkbox1) {
    checkbox1.addEventListener('change', () => {
      checkbox2.checked = checkbox1.checked;
      updateButtonAndCheckboxState();
    });
  }

  if (checkbox2) {
    checkbox2.addEventListener('change', () => {
      checkbox1.checked = checkbox2.checked;
      updateButtonAndCheckboxState();
    });
  }

  const preventSubmitIfNoCheckboxChecked = (event) => {
    const isAnyCheckboxChecked = (checkbox1 && checkbox1.checked) || (checkbox2 && checkbox2.checked);
    if (!isAnyCheckboxChecked) {
      event.preventDefault();
    }
  };

  if (form1) {
    form1.addEventListener('submit', preventSubmitIfNoCheckboxChecked);
  }

  if (form2) {
    form2.addEventListener('submit', preventSubmitIfNoCheckboxChecked);
  }
  updateButtonAndCheckboxState();
};
