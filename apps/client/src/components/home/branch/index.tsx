"use client";
import { Branch, BranchOption } from "apps/client/src/@types/branch.type";
import { getAllBranchs } from "apps/client/src/services/commit";
import { useEffect, useState } from "react";

interface BranchProps {
    currentBranch: string;
    setCurrentBranch: (branch: string) => void;
};

export default function Branch(props: BranchProps) {
    const [branchs, setBranchs] = useState<BranchOption[]>([]);
    const { currentBranch, setCurrentBranch } = props;

    const updateBranchData = (branch: string) => {
        setCurrentBranch(branch);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const branchs = await getAllBranchs();
                const branchData: BranchOption[] = branchs.map((branch: Branch) => {
                    return {
                        id: branch.name,
                        branch: branch.name
                    };
                });
                setBranchs(branchData);
            } catch (error) { };
        };
        fetchData();
    }, []);

    return (
        <div className="my-1 mr-2.5 relative">
            <select
                className="dark:bg-jacarta-700 sortDropdown dropdown-toggle border-jacarta-100 dark:border-jacarta-600 inline-flex w-48 items-center justify-between rounded-lg border bg-white py-2 px-3 text-sm dark:text-white"
                value={currentBranch}
                onChange={(e) => updateBranchData(e.target.value)}
            >
                {branchs.map((branch, index) => {
                    return (
                        <option key={index} value={branch.id}>{branch.branch}</option>
                    )
                })}

            </select>

        </div>
    );
};

