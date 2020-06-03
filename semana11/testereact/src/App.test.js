import React from "react";
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import App from "./App";



describe("Criar post", () => {
    test("quando o usuário digita e clica em adicionar, o post aparece", () => {
        const {getByText, getByPlaceholderText} = render(<App/>)

        const input = getByPlaceholderText('Novo post')
        
        const button = getByText(/Adicionar/)

        fireEvent.change(input, {target:{value: 'teste'}})

        fireEvent.click(button)

        expect(getByText(/teste/))
    })
})

