export const tests = []
const t = (f) => tests.push(f)

t(({ eq, value }) => eq(value ?? null, expected))

const expected = [
  { PlaylistId: 1, Name: 'Music' },
  { PlaylistId: 2, Name: 'Movies' },
  { PlaylistId: 3, Name: 'TV Shows' },
  { PlaylistId: 4, Name: 'Audiobooks' },
  { PlaylistId: 5, Name: '90’s Music' },
  { PlaylistId: 6, Name: 'Audiobooks' },
  { PlaylistId: 7, Name: 'Movies' },
  { PlaylistId: 8, Name: 'Music' },
  { PlaylistId: 9, Name: 'Music Videos' },
  { PlaylistId: 10, Name: 'TV Shows' },
  { PlaylistId: 11, Name: 'Brazilian Music' },
  { PlaylistId: 12, Name: 'Classical' },
  { PlaylistId: 13, Name: 'Classical 101 - Deep Cuts' },
  { PlaylistId: 14, Name: 'Classical 101 - Next Steps' },
  { PlaylistId: 15, Name: 'Classical 101 - The Basics' },
  { PlaylistId: 16, Name: 'Grunge' },
  { PlaylistId: 17, Name: 'Heavy Metal Classic' },
  { PlaylistId: 18, Name: 'On-The-Go 1' }
]

Object.freeze(tests)