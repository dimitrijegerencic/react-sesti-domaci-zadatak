import {listOfUsers} from "../constants/constants";
import {createContext, useContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const onMovieSelect = (movieData) => {

        const {id: movieId} = movieData;

        const peopleWhoWatched = listOfUsers.filter(user => user.movies.includes(movieId));

        setSelectedMovie({
            ...movieData,
            users: peopleWhoWatched
        })
    }

    const onUserSelect = (userData) => {
        const {id:userId} = userData;

        setSelectedUser({
            ...userData
        })
    }

    useEffect(()=> {
        console.log(selectedMovie);
    }, [selectedMovie])

    useEffect(()=> {
        console.log(selectedUser);
    }, [ selectedUser])


    const data = {
        selectedMovie : selectedMovie,
        selectedUser : selectedUser,
        setSelectedMovie: (e) => onMovieSelect(e),
        setSelectedUser: (e) => onUserSelect(e)
    }

    return <AppContext.Provider value={data}>
        {children}
    </AppContext.Provider>

}

export const useAppData = () => {
    return useContext(AppContext);
}

export default AppProvider;