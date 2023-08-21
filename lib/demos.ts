export type BookItem = {
  type: 'B'
  title: string
  link: string
  image: string
  publisher: string
  pubdate: Date
  isbn: string
  description: string
}

export type MovieItem = {
  type: 'M'
  title: string
  link: string
  image: string
  pubDate: Date
  director: string
  actor: string
}

export const demos: (BookItem | MovieItem)[] = [
  {
    type: 'B',
    title: '미움받을 용기',
    link: 'http://book.naver.com/bookdb/book_detail.php?bid=14071746',
    image:
      'https://bookthumb-phinf.pstatic.net/cover/140/717/14071746.jpg?type=m1&udate=20181226',
    publisher: '흐름출판',
    pubdate: new Date('2018-11-26'),
    isbn: '1189909170 9791189909178',
    description:
      '우리는 언제나 두려움을 느낀다. 그리고 그 두려움을 피하기 위해 노력한다. 그러다 보면 두려움은 더욱더 커져서 우리를 지배하기 시작한다. 이 책은 두려움에 맞서는 용기를 얻기 위한 실용서이다. 두려움을 이겨내는 방법을 알려주고, 용기를 얻는 방법을 알려준다. 두려움을 이겨내는 방법을 알려주고, 용기를 얻는 방법을 알려준다. 두려움을 이겨내는 방법을 알려주고, 용기를 얻는 방법을 알려준다.'
  },
  {
    type: 'M',
    title: '킬빌 1',
    link: 'http://movie.naver.com/movie/bi/mi/basic.nhn?code=31796',
    image:
      'https://ssl.pstatic.net/imgmovie/mdi/mit110/0317/31796_P01_144647.jpg',
    pubDate: new Date('2003-10-10'),
    director: '퀸틴 타란티노',
    actor: '엄마 써마 먼, 데이비드 카라딘, 더런 헤너맨'
  },
  {
    type: 'M',
    title: '킬빌 2',
    link: 'http://movie.naver.com/movie/bi/mi/basic.nhn?code=31797',
    image:
      'https://ssl.pstatic.net/imgmovie/mdi/mit110/0317/31797_P01_101153.jpg',
    pubDate: new Date('2004-04-23'),
    director: '퀸틴 타란티노',
    actor: '엄마 써마 먼, 데이비드 카라딘, 더런 헤너맨'
  },
  {
    type: 'B',
    title: '명상의 시간',
    link: 'http://book.naver.com/bookdb/book_detail.php?bid=14071746',
    image:
      'https://bookthumb-phinf.pstatic.net/cover/140/717/14071746.jpg?type=m1&udate=20181226',
    publisher: '흐름출판',
    pubdate: new Date('2018-11-26'),
    isbn: '1189909170 9791189909178',
    description: ''
  },
  {
    type: 'B',
    title: '데미안',
    link: 'http://book.naver.com/bookdb/book_detail.php?bid=14071746',
    image:
      'https://bookthumb-phinf.pstatic.net/cover/140/717/14071746.jpg?type=m1&udate=20181226',
    publisher: '흐름출판',
    pubdate: new Date('2018-11-26'),
    isbn: '1189909170 9791189909178',
    description: ''
  },
  {
    type: 'B',
    title: '사랑과 영혼',
    link: 'http://book.naver.com/bookdb/book_detail.php?bid=14071746',
    image:
      'https://bookthumb-phinf.pstatic.net/cover/140/717/14071746.jpg?type=m1&udate=20181226',
    publisher: '흐름출판',
    pubdate: new Date('2018-11-26'),
    isbn: '1189909170 9791189909178',
    description: ''
  },
  {
    type: 'M',
    title: '분노의 질주',
    link: 'http://movie.naver.com/movie/bi/mi/basic.nhn?code=31796',
    image:
      'https://ssl.pstatic.net/imgmovie/mdi/mit110/0317/31796_P01_144647.jpg',
    pubDate: new Date('2003-10-10'),
    director: '퀸틴 타란티노',
    actor: '엄마 써마 먼, 데이비드 카라딘, 더런 헤너맨'
  }
]
