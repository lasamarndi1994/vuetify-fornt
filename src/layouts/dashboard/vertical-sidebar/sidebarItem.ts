// icons
import {
    DashboardOutlined,
    UserOutlined,
    FieldTimeOutlined,
    RightOutlined,
    CarryOutOutlined,
    IdcardOutlined,
    PoundCircleOutlined,
    SettingOutlined,
    MobileOutlined
} from '@ant-design/icons-vue';

export interface menu {
    header?: string;
    title?: string;
    icon?: object;
    to?: string;
    divider?: boolean;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'Dashboard',
        icon: DashboardOutlined,
        to: '/dashboard'
    },
    {
        title: 'Employees',
        icon: UserOutlined,
        to: '/employees'
    },

    {
        title: 'Attendance',
        icon: FieldTimeOutlined,
        to: '/attendance',
        children: [
            {
                title: 'Online Attendance',
                icon: RightOutlined,
                to: '/attendance/online-attendance'
            },
            {
                title: 'Attendance Regularization',
                icon: RightOutlined,
                to: '/attendance/attendance-regularization'
            },
            {
                title: 'Attendance Reports',
                icon: RightOutlined,
                to: '/attendance/attendance-reports'
            }
        ]
    },

    {
        title: 'Leave',
        icon: CarryOutOutlined,
        to: '/leave',
        children: [
            {
                title: 'Apply Leave',
                icon: RightOutlined,
                to: '/leave/apply-leave'
            },
            {
                title: 'Leave Application',
                icon: RightOutlined,
                to: '/leave/leave-application'
            },
            {
                title: 'Leave Balance Report',
                icon: RightOutlined,
                to: '/leave/leave-balance-report'
            }
        ]
    },

    {
        title: 'Recuiter',
        icon: IdcardOutlined,
        to: '/recuiter',
    },

    {
        title: 'Payroll',
        icon: PoundCircleOutlined,
        to: '/payroll',
        children: [
            {
                title: 'Salary Slip',
                icon: RightOutlined,
                to: '/payroll/salary-slip'
            },
            {
                title: 'Tax Statement',
                icon: RightOutlined,
                to: '/payroll/tax-statement'
            }
        ]
    },
    {
        title: 'Setting',
        icon: SettingOutlined,
        to: 'setting',
        children: [
            {
                title: 'Department',
                icon: RightOutlined,
                to: '/setting/departments'
            }, {
                title: 'Designation',
                icon: RightOutlined,
                to: '/setting/designations'
            }, {
                title: 'Time Schedule',
                icon: RightOutlined,
                to: '/setting/time-schedule'
            }
        ]
    },
    {
        title: 'Contacts',
        icon: MobileOutlined,
        to: '/sample-page'
    }
];

export default sidebarItem;
