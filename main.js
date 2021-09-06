import { baseCompile } from '@vue/compiler-core/dist/compiler-core.cjs'

const result = baseCompile(``, {})

console.log(result)
document.body.innerHTML = 'success'
