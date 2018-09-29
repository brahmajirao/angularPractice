export class CoursesService{
    getCources() {
        return [
            {
                title:"The complete Angular Course",
                rating: 4.9745,
                students: 20123,
                price: 190.95,
                releaseDate: new Date(2016, 3, 1)
            },
            {
                title:"The complete Python Course",
                rating: 4.9995,
                students: 30453,
                price: 290.954,
                releaseDate: new Date(2016, 3, 1)
            },
            {
                title:"The complete Datastructures Course",
                rating: 4.1745,
                students: 31123,
                price: 160.95,
                releaseDate: new Date(2016, 3, 1)
            },
            {
                title:"The complete PHP Course",
                rating: 4.2745,
                students: 30443,
                price: 180.95,
                releaseDate: new Date(2016, 3, 1)
            }
        ];
    }
}