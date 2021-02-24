const inputs = document.querySelectorAll('.controls__input');

function handleChange() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener('change', handleChange));
inputs.forEach((input) => input.addEventListener('mousemove', handleChange));
