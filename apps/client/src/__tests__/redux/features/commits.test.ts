import commitsReducer, { setCommit, setCommits } from '../../../redux/features/commits';
import { Commit } from '../../../@types/commit.type';

describe('commits reducer', () => {
  const initialState = {
    commits: [],
    commit: null,
  };

  it('should handle setCommits', () => {
    const commits: Commit[] = [

    ];
    const action = setCommits(commits);
    const newState = commitsReducer(initialState, action);
    expect(newState.commits).toEqual(commits);
  });

  it('should handle setCommit', () => {
    const commit: Commit = {
      "sha": "531fd2f9e10e1c072e18a10c6a70737be0140035",
      "node_id": "C_kwDOKLHna9oAKDUzMWZkMmY5ZTEwZTFjMDcyZTE4YTEwYzZhNzA3MzdiZTAxNDAwMzU",
      "commit": {
        "author": {
          "name": "Julio Flores",
          "email": "66804353+0riion@users.noreply.github.com",
          "date": "2023-08-26T14:36:54Z"
        },
        "committer": {
          "name": "GitHub",
          "email": "noreply@github.com",
          "date": "2023-08-26T14:36:54Z"
        },
        "message": "Merge pull request #8 from 0riion/development\n\nDevelopment",
        "tree": {
          "sha": "4a5767442dfe55e1da6bbba37fe27ec20ae757d7",
          "url": "https://api.github.com/repos/0riion/commit-flow-history/git/trees/4a5767442dfe55e1da6bbba37fe27ec20ae757d7"
        },
        "url": "https://api.github.com/repos/0riion/commit-flow-history/git/commits/531fd2f9e10e1c072e18a10c6a70737be0140035",
        "comment_count": 0,
        "verification": {
          "verified": true,
          "reason": "valid",
          "signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJk6g4GCRBK7hj4Ov3rIwAAvsYIAKH0jAmri7CjG/xi3567Bq3n\nWp0gAOVoSCxH/zpbR/ftDEUj0yft7UMOo68sDQjJP6P9cXf9ykvnotF2+2TEc5jQ\n856l804rHRdNS13Ouo5ca3AOAMpbARor+SXDodk55vk2ejUaLpYdsRDkwqDLUXEW\n/PCdbix1HbLkooYj7rsblvXI0tL+8kLMdGr7PxiQccgzwdHra6c8amNCXlO5qmXW\n3D2oq6sIZHnWUzNPIMXCcJWSFpPaDsHRaUrAZYYVtPB1aOIkfqUQgMaB31fjNdmS\n7GXDw1aG8TmPgQr/Pqiw3te+njVrV3v5w67bf1iKLwJdwyoDunYR/o+Yrh4j2Io=\n=XQi7\n-----END PGP SIGNATURE-----\n",
          "payload": "tree 4a5767442dfe55e1da6bbba37fe27ec20ae757d7\nparent 52693547bf1baff260f709729fba1c650b1d7b89\nparent 1c246dae2c7112d65f452fff958ad5043363f502\nauthor Julio Flores <66804353+0riion@users.noreply.github.com> 1693060614 -0400\ncommitter GitHub <noreply@github.com> 1693060614 -0400\n\nMerge pull request #8 from 0riion/development\n\nDevelopment"
        }
      },
      "url": "https://api.github.com/repos/0riion/commit-flow-history/commits/531fd2f9e10e1c072e18a10c6a70737be0140035",
      "html_url": "https://github.com/0riion/commit-flow-history/commit/531fd2f9e10e1c072e18a10c6a70737be0140035",
      "comments_url": "https://api.github.com/repos/0riion/commit-flow-history/commits/531fd2f9e10e1c072e18a10c6a70737be0140035/comments",
      "author": {
        "login": "0riion",
        "id": 66804353,
        "node_id": "MDQ6VXNlcjY2ODA0MzUz",
        "avatar_url": "https://avatars.githubusercontent.com/u/66804353?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/0riion",
        "html_url": "https://github.com/0riion",
        "followers_url": "https://api.github.com/users/0riion/followers",
        "following_url": "https://api.github.com/users/0riion/following{/other_user}",
        "gists_url": "https://api.github.com/users/0riion/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/0riion/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/0riion/subscriptions",
        "organizations_url": "https://api.github.com/users/0riion/orgs",
        "repos_url": "https://api.github.com/users/0riion/repos",
        "events_url": "https://api.github.com/users/0riion/events{/privacy}",
        "received_events_url": "https://api.github.com/users/0riion/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "web-flow",
        "id": 19864447,
        "node_id": "MDQ6VXNlcjE5ODY0NDQ3",
        "avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/web-flow",
        "html_url": "https://github.com/web-flow",
        "followers_url": "https://api.github.com/users/web-flow/followers",
        "following_url": "https://api.github.com/users/web-flow/following{/other_user}",
        "gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
        "organizations_url": "https://api.github.com/users/web-flow/orgs",
        "repos_url": "https://api.github.com/users/web-flow/repos",
        "events_url": "https://api.github.com/users/web-flow/events{/privacy}",
        "received_events_url": "https://api.github.com/users/web-flow/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "52693547bf1baff260f709729fba1c650b1d7b89",
          "url": "https://api.github.com/repos/0riion/commit-flow-history/commits/52693547bf1baff260f709729fba1c650b1d7b89",
          "html_url": "https://github.com/0riion/commit-flow-history/commit/52693547bf1baff260f709729fba1c650b1d7b89"
        },
        {
          "sha": "1c246dae2c7112d65f452fff958ad5043363f502",
          "url": "https://api.github.com/repos/0riion/commit-flow-history/commits/1c246dae2c7112d65f452fff958ad5043363f502",
          "html_url": "https://github.com/0riion/commit-flow-history/commit/1c246dae2c7112d65f452fff958ad5043363f502"
        }
      ]
    };
    const action = setCommit(commit);
    const newState = commitsReducer(initialState, action);
    expect(newState.commit).toEqual(commit);
  });
});
