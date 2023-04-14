import { required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import { defineRule } from 'vee-validate'

localize('pt_BR')
setLocale('pt_BR')

defineRule('required', required)
defineRule('cpf', (value: string) => {
  try {
    const cpf = value.replace(/[^\d]+/g, '')

    if (cpf.length !== 11) {
      throw new Error();
    }

    if (/^([0-9])\1+$/.test(cpf)) {
      throw new Error();
    }

    const soma1 = cpf
      .split('')
      .slice(0, 9)
      .map(Number)
      .reduce((acc, num, i) => acc + num * (10 - i), 0)

    const resto1 = (soma1 * 10) % 11

    const soma2 = cpf
      .split('')
      .slice(0, 10)
      .map(Number)
      .reduce((acc, num, i) => acc + num * (11 - i), 0)

    const resto2 = (soma2 * 10) % 11

    if (resto1 === Number(cpf[9]) && resto2 === Number(cpf[10])) {
      return true;
    } else {
      throw new Error();
    }
  } catch {
    return "CPF inválido";
  }
})
defineRule("cns", (value: string) => {
  const cns = value.replace(" ","").replace(" ", "").replace(" ","");

  console.log(cns);
  return true;
})
