import React from 'react'
import { MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { useNavigate  } from "react-router-dom"

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

const items = [
  getItem('项目', 'sub1', <MailOutlined />, [
    getItem('博客', '/blogs'),
    getItem('关于', '/about'),
  ]),
]

export default function Nav() {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e.key);
    console.log('click ', e)
  }

  return <Menu
        onClick={onClick}
        defaultSelectedKeys={['/blogs']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
}