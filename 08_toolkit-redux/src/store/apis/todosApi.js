import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const todosApi = createApi({

    reducerPath: 'todos', //nombre del reducer

    baseQuery: fetchBaseQuery({//base
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),

    endpoints: (builder) => ({//endpoints

        getTodos: builder.query({
            query: () => '/todos'
        }),

        getTodo: builder.query({
            query: (todoId) => `/todos/${ todoId }`
        }),

    })

})

export const { useGetTodosQuery, useGetTodoQuery, } = todosApi;//coostom hooks
