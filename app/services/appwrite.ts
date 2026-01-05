import {Client, ID, Query, TablesDB} from 'react-native-appwrite'

// track the searches made by a user

const PROJECT_ID = process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!;
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const TABLE_ID = process.env.EXPO_PUBLIC_APPWRITE_TABLE_ID!;
const ENDPOINT = process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!;

const client = new Client()
    .setProject(PROJECT_ID)
    .setEndpoint(ENDPOINT)

const tablesDB = new TablesDB(client);

export const updateSearchCount = async(query: string, movie: Movie) => {
    console.log('updateSearchCount')
    try {

        const results = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [Query.equal('searchTerm', query)]
        });
    
        console.log("results", results)
        console.log('movie', movie)
        console.log('query', query)
    
        if (results.rows.length > 0) {
            const existingMovie = results.rows[0]
    
            console.log('existingMovie', existingMovie)
            await tablesDB.updateRow(
                DATABASE_ID,
                TABLE_ID,
                existingMovie.$id,
                {
                    count: existingMovie.count + 1
                }
            )
        } else {
            console.log('else')
            await tablesDB.createRow(
                DATABASE_ID,
                TABLE_ID,
                ID.unique(),
                {
                    searchTerm: query,
                    movie_id: movie.id,
                    count: 1,
                    title: movie.title,
                    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                }
            )
        }

    } catch (error) {
        console.log(error)
        throw error
    }


    // check if a record of that search has already been stored
    // if a document is found increment the searchCount field
    // if no document is found
        // create a new document in AppWrite database => 1
}

export const getTrendingMovies = async(): Promise<TrendingMovie[] | undefined> => {
    try {
        const results = await tablesDB.listRows({
            databaseId: DATABASE_ID,
            tableId: TABLE_ID,
            queries: [
                Query.limit(5),
                Query.orderDesc('count')
            ]
        });

        return results.rows as unknown as TrendingMovie[]

    } catch (error) {
        console.log(error)
        return undefined
    }
}

export default {updateSearchCount, getTrendingMovies}