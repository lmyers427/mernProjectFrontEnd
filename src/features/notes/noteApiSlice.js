import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit"
import { apiSlice } from "../../app/api/apiSlice"
 

const noteAdapter = createEntityAdapter({})

const initialState = noteAdapter.getInitialState()

export const noteApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getNote: builder.query({
            query: () => '/note',
            validateStatus: (response, result) => {
                return response.status = 200 && !result.isError
            },
            //Once deployed change to 60s
            keppUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedNote = responseData.map(user => {
                    note.id = note._id
                    return user
                });
                return noteAdapter.setAll(initialState, loadedNote)
            },
            providesTags: (result, error, arg) => {
                if(result?.ids){
                    return [
                        {type: 'Note', id: 'LIST'},
                        ...result.ids.map(id => ({type:'Note', id}))
                    ] 
                } else return [{ type: 'User', id: 'LIST'}]
            }
        }),
    }),
})


export const {
    useGetNoteQuery,
} = noteApiSlice


//return query result object
export const selectNoteResult = noteApiSlice.endpoints.getNote.select()

const selectNoteData = createSelector(
    selectNoteResult,
    noteResult => noteResult.data //normalised state object with ids & entities
)

export const {
    selectAll: selectAllNote,
    selectById: selectNoteById,
    selectIds: selectUserIds
    //Pass in a select that returns the note slice of state
} = noteAdapter.getSelectors(state => selectNoteData(state) ?? 
initialState)
