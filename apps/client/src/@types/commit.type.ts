export interface Commit {
    sha: string;
    node_id: string;
    commit: CommitClass;
    url: string;
    html_url: string;
    comments_url: string;
    author: CommitAuthor;
    committer: CommitAuthor;
    parents: Parent[];
}

export interface CommitAuthor {
    login: Login;
    id: number;
    node_id: NodeID;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: FollowingURL;
    gists_url: GistsURL;
    starred_url: StarredURL;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: EventsURL;
    received_events_url: string;
    type: Type;
    site_admin: boolean;
}

export enum EventsURL {
    HTTPSAPIGithubCOMUsers0RiionEventsPrivacy = "https://api.github.com/users/0riion/events{/privacy}",
    HTTPSAPIGithubCOMUsersWebFlowEventsPrivacy = "https://api.github.com/users/web-flow/events{/privacy}",
}

export enum FollowingURL {
    HTTPSAPIGithubCOMUsers0RiionFollowingOtherUser = "https://api.github.com/users/0riion/following{/other_user}",
    HTTPSAPIGithubCOMUsersWebFlowFollowingOtherUser = "https://api.github.com/users/web-flow/following{/other_user}",
}

export enum GistsURL {
    HTTPSAPIGithubCOMUsers0RiionGistsGistID = "https://api.github.com/users/0riion/gists{/gist_id}",
    HTTPSAPIGithubCOMUsersWebFlowGistsGistID = "https://api.github.com/users/web-flow/gists{/gist_id}",
}

export enum Login {
    The0Riion = "0riion",
    WebFlow = "web-flow",
}

export enum NodeID {
    MDQ6VXNlcjE5ODY0NDQ3 = "MDQ6VXNlcjE5ODY0NDQ3",
    MDQ6VXNlcjY2ODA0MzUz = "MDQ6VXNlcjY2ODA0MzUz",
}

export enum StarredURL {
    HTTPSAPIGithubCOMUsers0RiionStarredOwnerRepo = "https://api.github.com/users/0riion/starred{/owner}{/repo}",
    HTTPSAPIGithubCOMUsersWebFlowStarredOwnerRepo = "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
}

export enum Type {
    User = "User",
}

export interface CommitClass {
    author: CommitAuthorClass;
    committer: CommitAuthorClass;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}

export interface CommitAuthorClass {
    name: Name;
    email: Email;
    date: Date;
}

export enum Email {
    Juliocesarflores12GmailCOM = "juliocesarflores12@gmail.com",
    NoreplyGithubCOM = "noreply@github.com",
    The668043530RiionUsersNoreplyGithubCOM = "66804353+0riion@users.noreply.github.com",
}

export enum Name {
    GitHub = "GitHub",
    JulioFlores = "Julio Flores",
}

export interface Tree {
    sha: string;
    url: string;
}

export interface Verification {
    verified: boolean;
    reason: string;
    signature: null | string;
    payload: null | string;
}

export interface Parent {
    sha: string;
    url: string;
    html_url: string;
}

export class Convert {
    public static toCommit(json: string): Commit[] {
        return cast(JSON.parse(json), a(r("Commit")));
    }

    public static commitToJson(value: Commit[]): string {
        return JSON.stringify(uncast(value, a(r("Commit"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Commit": o([
        { json: "sha", js: "sha", typ: "" },
        { json: "node_id", js: "node_id", typ: "" },
        { json: "commit", js: "commit", typ: r("CommitClass") },
        { json: "url", js: "url", typ: "" },
        { json: "html_url", js: "html_url", typ: "" },
        { json: "comments_url", js: "comments_url", typ: "" },
        { json: "author", js: "author", typ: r("CommitAuthor") },
        { json: "committer", js: "committer", typ: r("CommitAuthor") },
        { json: "parents", js: "parents", typ: a(r("Parent")) },
    ], false),
    "CommitAuthor": o([
        { json: "login", js: "login", typ: r("Login") },
        { json: "id", js: "id", typ: 0 },
        { json: "node_id", js: "node_id", typ: r("NodeID") },
        { json: "avatar_url", js: "avatar_url", typ: "" },
        { json: "gravatar_id", js: "gravatar_id", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "html_url", js: "html_url", typ: "" },
        { json: "followers_url", js: "followers_url", typ: "" },
        { json: "following_url", js: "following_url", typ: r("FollowingURL") },
        { json: "gists_url", js: "gists_url", typ: r("GistsURL") },
        { json: "starred_url", js: "starred_url", typ: r("StarredURL") },
        { json: "subscriptions_url", js: "subscriptions_url", typ: "" },
        { json: "organizations_url", js: "organizations_url", typ: "" },
        { json: "repos_url", js: "repos_url", typ: "" },
        { json: "events_url", js: "events_url", typ: r("EventsURL") },
        { json: "received_events_url", js: "received_events_url", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "site_admin", js: "site_admin", typ: true },
    ], false),
    "CommitClass": o([
        { json: "author", js: "author", typ: r("CommitAuthorClass") },
        { json: "committer", js: "committer", typ: r("CommitAuthorClass") },
        { json: "message", js: "message", typ: "" },
        { json: "tree", js: "tree", typ: r("Tree") },
        { json: "url", js: "url", typ: "" },
        { json: "comment_count", js: "comment_count", typ: 0 },
        { json: "verification", js: "verification", typ: r("Verification") },
    ], false),
    "CommitAuthorClass": o([
        { json: "name", js: "name", typ: r("Name") },
        { json: "email", js: "email", typ: r("Email") },
        { json: "date", js: "date", typ: Date },
    ], false),
    "Tree": o([
        { json: "sha", js: "sha", typ: "" },
        { json: "url", js: "url", typ: "" },
    ], false),
    "Verification": o([
        { json: "verified", js: "verified", typ: true },
        { json: "reason", js: "reason", typ: "" },
        { json: "signature", js: "signature", typ: u(null, "") },
        { json: "payload", js: "payload", typ: u(null, "") },
    ], false),
    "Parent": o([
        { json: "sha", js: "sha", typ: "" },
        { json: "url", js: "url", typ: "" },
        { json: "html_url", js: "html_url", typ: "" },
    ], false),
    "EventsURL": [
        "https://api.github.com/users/0riion/events{/privacy}",
        "https://api.github.com/users/web-flow/events{/privacy}",
    ],
    "FollowingURL": [
        "https://api.github.com/users/0riion/following{/other_user}",
        "https://api.github.com/users/web-flow/following{/other_user}",
    ],
    "GistsURL": [
        "https://api.github.com/users/0riion/gists{/gist_id}",
        "https://api.github.com/users/web-flow/gists{/gist_id}",
    ],
    "Login": [
        "0riion",
        "web-flow",
    ],
    "NodeID": [
        "MDQ6VXNlcjE5ODY0NDQ3",
        "MDQ6VXNlcjY2ODA0MzUz",
    ],
    "StarredURL": [
        "https://api.github.com/users/0riion/starred{/owner}{/repo}",
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
    ],
    "Type": [
        "User",
    ],
    "Email": [
        "juliocesarflores12@gmail.com",
        "noreply@github.com",
        "66804353+0riion@users.noreply.github.com",
    ],
    "Name": [
        "GitHub",
        "Julio Flores",
    ],
};
