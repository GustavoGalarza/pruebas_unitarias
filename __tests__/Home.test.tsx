import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

//GUSTAVO GALARZA ARIASSSSS-TUVE ERRORES EL EJECUTAR EL JEST ME TIRABA QUE "FAIL"
describe('Home', () => {
it('should have Docs text', () => {
    render(<Home />)//ARRANGE

    const myElem = screen.getByText('Docs')//ACT

    expect(myElem).toBeInTheDocument() //ASERT  

})
})
