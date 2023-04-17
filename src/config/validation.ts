import { defineRule } from 'vee-validate'

defineRule('required', (value: string): string | boolean => {
  if (!value || !value.length) {
    return 'Esse campo é obrigatório'
  }

  return true
})

defineRule('fullName', (value: string): string | boolean => {
  try {
    const name = value.trim()

    if (name.split(' ')[0].length === 1) {
      throw new Error('Insira um nome válido')
    }

    if (name.split(' ').length < 2) {
      throw new Error('Insira o sobrenome')
    }

    return true
  } catch (error) {
    const errorObj = error as { message: string }
    const { message } = errorObj

    return message ? message : 'Nome inválido'
  }
})

defineRule('email', (value: string): string | boolean => {
  try {
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    if (!regex.test(value)) {
      throw new Error("Insira um e-mail válido");
    }

    return true;
  } catch(error) {
    const errorObj = error as { message: string }
    const { message } = errorObj

    return message ? message : 'E-mail inválido'
  }

})

defineRule('cpf', (value: string): string | boolean => {
  try {
    const cpf = value.replace(/[^\d]+/g, '')

    if (cpf.length !== 11) {
      throw new Error()
    }

    if (/^([0-9])\1+$/.test(cpf)) {
      throw new Error()
    }

    const sum1 = cpf
      .split('')
      .slice(0, 9)
      .map(Number)
      .reduce((acc, num, i) => acc + num * (10 - i), 0)

    const remainder1 = (sum1 * 10) % 11

    const sum2 = cpf
      .split('')
      .slice(0, 10)
      .map(Number)
      .reduce((acc, num, i) => acc + num * (11 - i), 0)

    const remainder2 = (sum2 * 10) % 11

    if (remainder1 === Number(cpf[9]) && remainder2 === Number(cpf[10])) {
      return true
    } else {
      throw new Error()
    }
  } catch {
    return 'CPF inválido'
  }
})

defineRule('cns', (value: string): string | boolean => {
  try {
    const cns = value.replaceAll(' ', '')

    if (cns.length !== 15) {
      throw new Error()
    }

    if (['0', '3', '4', '5', '6'].includes(cns[0])) {
      throw new Error()
    }

    if (['7', '8', '9'].includes(cns[0])) {
      const soma = cns.split('').reduce((total, value, index) => {
        return total + Number(value) * (15 - index)
      }, 0)

      if (soma % 11 === 0) {
        return true
      } else {
        throw new Error()
      }
    } else {
      const pis = cns.substring(0, 11)

      const soma = pis.split('').reduce((total, value, index) => {
        return total + Number(value) * (15 - index)
      }, 0)

      const resto = soma % 11
      const dv = resto === 0 ? 0 : 11 - resto

      const resultado = dv === 10 ? `${pis}001${11 - ((soma + 2) % 11)}` : `${pis}000${dv}`

      if (resultado === cns) {
        return true
      } else {
        throw new Error()
      }
    }
  } catch {
    return 'CNS Inválido'
  }
})

defineRule('cep', (value: string): string | boolean => {
  try {
    const cep = value.replace('-', '')

    if (cep.length !== 8) {
      throw new Error()
    }

    return true
  } catch {
    return 'CEP inválido'
  }
})

defineRule("password", (value: string) => {
  if (!value) {
    return "Senha obrigatória";
  }

  return true;
})

defineRule("confirmed", (value: string, [target]) => {
  if (value === target) {
    return true;
  }

  return "As senhas precisam ser iguais";
})

defineRule("state", (value: string) => {
  if ([
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ].includes(value.toUpperCase())) {
    return true;
  }

  return "Insira uma sigla válida"
})
