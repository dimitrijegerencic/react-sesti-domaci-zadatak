export const listOfUsers = [
    {
        id: 1,
        firstName: 'Edina',
        lastName: 'Mehmedovic',
        age: 28,
        city: 'Budva',
        image: '../images/avatar3.png',
        movies:[1, 2, 4, 5, 6, 14, 3]
    },{
        id: 2,
        firstName: 'Ana',
        lastName: 'Markovic',
        age: 30,
        city: 'Cetinje',
        image: '../images/avatar6.png',
        movies: [8, 4, 12, 18, 7]
    },{
        id: 3,
        firstName: 'Marko',
        lastName: 'Markovic',
        age: 18,
        city: 'Podgorica',
        image: '../images/avatar5.png',
        movies: [7, 13, 10, 15, 3]
    },{
        id: 4,
        firstName: 'Nemanja',
        lastName: 'Nemanjic',
        age: 50,
        city: 'Niksic',
        image: '../images/avatar4.png',
        movies: [7, 10, 4, 14, 18, 5]
    },
    {
        id: 5,
        firstName: 'Dimitrije',
        lastName: 'Gerenčić',
        age: 22,
        city: 'Podgorica',
        image: '../images/avatar2.png',
        movies: [11, 5, 1, 9, 8, 12]
    },
    {
        id: 6,
        firstName: 'Tony',
        lastName: 'Stark',
        age: 41,
        city: 'New York',
        image: '../images/avatar1.png',
        movies: [11, 1, 9, 8]
    }

];

export const  listOfMovies = [
    {
        id: 1,
        name: 'Pulp Fiction',
        year: 1994,
        genre: 'Crime',
        grade: '9.1',
        length: '141',
        image:
            '../images/pulp-fiction.jpg',
        actors: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
        users:[2 ,5, 3]
    },
    {
        id: 2,
        name: 'About Time',
        year: 2013,
        genre: 'Drama',
        grade: '7.3',
        length: '103',
        image:
            '../images/about-time.jpg',
        actors: ['Domhnall Gleeson', 'Rachel McAdams', 'Bill Nighy'],
        users:[1, 6, 3]
    },
    {
        id: 3,
        name: 'The Shawshank Redemption',
        year: 1994,
        genre: 'Drama',
        grade: '9.6',
        length: '155',
        image: '../images/the-shawshank-redemption.jpg',
        actors: ['Tim Robbins', 'Morgan Freeman'],
        users:[1, 4, 2]
    },
    {
        id: 4,
        name: 'Fight Club',
        year: 1999,
        genre: 'Drama',
        grade: '8.5',
        length: '127',
        image: '../images/fight-club.jpeg',
        actors: ['Brad Pitt', 'Edward Norton'],
        users:[4, 1]
    },
    {
        id: 5,
        name: 'Inception',
        year: 2010,
        genre: 'Action',
        grade: '8.3',
        length: '160',
        image:
            '../images/inception.jpg',
        actors: [
            'Leonardo DiCaprio',
            'Joseph Gordon-Levitt',
            'Ellen Page(Elliot Page)',
        ],
        users:[1, 4, 2]
    },
    {
        id: 6,
        name: `One Flew Over the Cuckoo's Nest`,
        year: 1975,
        genre: 'Drama',
        grade: '9.3',
        length: '152',
        image:
            '../images/one-flew-over-the-cuckoos-nest.jpg',
        actors: ['Jack Nicholson', 'Louise Fletcher'],
        users:[5, 6]
    },
    {
        id: 7,
        name: 'The Silence of the Lambs',
        year: 1991,
        genre: 'Crime',
        grade: '9.1',
        length: '122',
        image:
            '../images/the-silence-of-the-lambs.jpg',
        actors: ['Jodie Foster', 'Anthony Hopkins'],
        users:[1, 6, 3]
    },
    {
        id: 8,
        name: 'Sinister',
        year: 2012,
        genre: 'Horror',
        grade: '6.9',
        length: '101',
        image:
            '../images/sinister.jpg',
        actors: ['Ethan Hawke', 'Juliet Rylance'],
        users:[3]
    },
    {
        id: 9,
        name: 'Insidious',
        year: 2010,
        genre: 'Horror',
        grade: '8.2',
        length: '106',
        image:
            '../images/insidious.jpg',
        actors: ['Patrick Wilson', 'Rose Byrne', 'Lin Shaye'],
        users:[1, 2, 5, 6]
    },
    {
        id: 10,
        name: 'Untouchable',
        year: 2011,
        genre: 'Biography',
        grade: '8.8',
        length: '115',
        image:
            '../images/untouchable.jpg',
        actors: ['Francois Cluzet', 'Omar Sy'],
        users:[3, 6]
    },
    {
        id: 11,
        name: 'The Dark Knight Rises',
        year: 2012,
        genre: 'Action',
        grade: '9.0',
        length: '157',
        image:
            '../images/the-dark-knight-rises.jpg',
        actors: ['Christian Bale', 'Tom Hardy'],
        users:[1, 2, 3, 4, 5, 6]
    },
    {
        id: 12,
        name: 'Avengers: Endgame',
        year: 2019,
        genre: 'Action',
        grade: '9.6',
        length: '182',
        image:
            '../images/avengers-endgame.jpg',
        actors: ['Robert Downey Jr', 'Chris Evans', 'Mark Ruffalo'],
        users:[1, 2, 3, 4, 5, 6]
    },
    {
        id: 13,
        name: 'Good Will Hunting',
        year: 1997,
        genre: 'Drama',
        grade: '9.7',
        length: '145',
        image:
            '../images/good-will-hunting.jpg',
        actors: ['Robin Williams', 'Matt Damon', 'Ben Affleck'],
        users:[1, 4, 2, 5]
    },
    {
        id: 14,
        name: 'The Hunt',
        year: 2012,
        genre: 'Drama',
        grade: '8.5',
        length: '118',
        image: '../images/the-hunt.jpg',
        actors: ['Mads Mikkelsen', 'Thomas Bo Larsen'],
        users:[1, 3, 4, 2]
    },
    {
        id: 15,
        name: 'Amelie',
        year: 2001,
        genre: 'Comedy',
        grade: '8.1',
        length: '101',
        image:
            '../images/amelie.jpg',
        actors: ['Audrey Tautou', 'Mathieu Kassovitz'],
        users:[6, 4]
    },
    {
        id: 16,
        name: 'Shutter Island',
        year: 2010,
        genre: 'Mystery',
        grade: '9.2',
        length: '178',
        image:
            '../images/shutter-island.jpg',
        actors: ['Leonardo DiCaprio', 'Mark Ruffalo'],
        users:[6, 4, 1, 2, 5]
    },
    {
        id: 17,
        name: 'Joker',
        year: 2019,
        genre: 'Crime',
        grade: '8.7',
        length: '137',
        image:
            '../images/joker.jpeg',
        actors: ['Joaquin Phoenix', 'Robert De Niro'],
        users:[1, 2, 3, 6]
    },
    {
        id: 18,
        name: 'The Departed',
        grade: '7.7',
        length: '129',
        year: 2006,
        genre: 'Crime',
        image:
            '../images/the-departed.jpg',
        actors: ['Leonardo DiCaprio', 'Matt Damon', 'Jack Nicholson'],
        users:[1, 4, 2, 5]
    },
]