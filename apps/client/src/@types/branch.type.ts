
export interface BranchOption {
    id: string;
    branch: string;
}

export interface Branch {
    name: string;
    commit: Commit;
    protected: boolean;
}

export interface Commit {
    sha: string;
    url: string;
}
