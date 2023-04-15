// import { required } from '@vee-validate/rules'
// import { localize, setLocale } from '@vee-validate/i18n'
// import { defineRule } from 'vee-validate'

// localize('pt_BR')
// setLocale('pt_BR')

// defineRule('required', required)
// defineRule('cpf', (value: string) => {
//   try {
//     const cpf = value.replace(/[^\d]+/g, '')

//     if (cpf.length !== 11) {
//       throw new Error();
//     }

//     if (/^([0-9])\1+$/.test(cpf)) {
//       throw new Error();
//     }

//     const soma1 = cpf
//       .split('')
//       .slice(0, 9)
//       .map(Number)
//       .reduce((acc, num, i) => acc + num * (10 - i), 0)

//     const resto1 = (soma1 * 10) % 11

//     const soma2 = cpf
//       .split('')
//       .slice(0, 10)
//       .map(Number)
//       .reduce((acc, num, i) => acc + num * (11 - i), 0)

//     const resto2 = (soma2 * 10) % 11

//     if (resto1 === Number(cpf[9]) && resto2 === Number(cpf[10])) {
//       return true;
//     } else {
//       throw new Error();
//     }
//   } catch {
//     return "CPF inválido";
//   }
// })
// defineRule("cns", (value: string) => {
//   const cns = value.replace(" ","").replace(" ", "").replace(" ","");

//   console.log(cns);
//   return true;
// })

// /*
//   Validações
//   - CPF
//   - CNS
//   - CEP
//   - SENHA
// */

import { defineRule } from 'vee-validate'

defineRule('required', (value: string): string | boolean => {
  if (!value || !value.length) {
    return 'Esse campo é obrigatório'
  }

  return true
})

defineRule("fullName", (value: string): string | boolean => {
  try {
    const name = value.trim();

    if (name.split(" ")[0].length === 1) {
      throw new Error("Insira um nome válido")
    }

    if (name.split(" ").length < 2) {
      throw new Error("Insira o sobrenome");
    }

    return true;
  } catch(error) {
    const errorObj = error as {message: string}
    const { message } = errorObj;

    return message ? message : "Nome inválido";
  }
})

defineRule('email', (value: string): string | boolean => {
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    return 'Insira um e-mail válido'
  }

  return true
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

defineRule("cns", (value: string): string | boolean => {
  try {
    const cns = value.replaceAll(" ","");

    if (cns.length !== 15) {
      throw new Error();
    }

    if (["0", "3", "4", "5", "6"].includes(cns[0])) {
      throw new Error();
    }

    if (["7", "8", "9"].includes(cns[0])) {
      const soma = cns.split("").reduce((total, value, index) => {
        return total + (Number(value) * (15 - index))
      }, 0)

      if (soma % 11 === 0) {
        return true;
      } else {
        throw new Error();
      }
      // return soma % 11 === 0
    } else {
      const pis = cns.substring(0, 11);

      const soma = pis.split("").reduce((total, value, index) => {
        return total + (Number(value) * (15 - index))
      }, 0)

      const resto = soma % 11;
      const dv = resto === 0 ? 0 : 11 - resto;

      const resultado = dv === 10 ? 
        `${pis}001${(11- ((soma + 2) % 11))}`: `${pis}000${dv}`
      
      if (resultado === cns) {
        return true;
      } else {
        throw new Error();
      }
      // return resultado === cns;
    }

  } catch {
    return "CNS Inválido";
  }
})

defineRule("cep", (value: string): string | boolean => {
  try {
    const cep = value.replace("-","");
    
    if (cep.length !== 8) {
      throw new Error();
    }

    return true;
  } catch {
    return "CEP inválido"
  }
})
