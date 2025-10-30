function formatarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); // remove tudo que não é número
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return cpf;
}

// Para usar no form.js:
// cpfInput.value = formatarCPF(cpfInput.value);
