//Permissions model

class Permission {
    id: number;
    name: string;
    description: string;
    enabled: boolean;
}

class PermissionSet {
    id: number;
    name: string;
    description: string;
    permissions: Permission[];
    enabled: boolean;
}