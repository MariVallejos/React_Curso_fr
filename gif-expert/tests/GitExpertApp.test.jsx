import { render, screen } from "@testing-library/react"
import { GitExpertApp } from "../src/GitExpertApp"

describe('Pruebas en <GitExpertApp/>', () => { 

    test('test', () => { 

        render(<GitExpertApp/>)
        screen.debug();

     })
 })