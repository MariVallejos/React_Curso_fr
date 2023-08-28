import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => { //aca lo emito, la props 

    const { description, onInputChange, onResetForm } = useForm({
        description: ''//el valor para el formulario
    }); //uso el hook

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (description.length <= 1) return; // si no hay valor en la descrip, no haga nada

        const newTodo = {//ya tengo el newTodo ahora toca emitirlo
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo(newTodo);//aca llamo
        onResetForm();
    }


    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>


        </>
    )
}

//NOTA

//Tengo que manejar un formulario y ya tengo un hooks creado para eso. el useForm

