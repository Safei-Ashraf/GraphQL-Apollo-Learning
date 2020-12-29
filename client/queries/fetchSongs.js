import gql from 'graphql-tag';

const fetchSongsQuery = gql`
{
    songs{
    title,
    id
    }
}
`;

export default fetchSongsQuery;