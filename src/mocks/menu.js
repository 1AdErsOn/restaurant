export default [
  /* {
    id: 1,
    tittle: 'Home',
    url: '/',
    options: false,
    subMenu: []
  },
  {
    id: 2,
    tittle: 'Perfil',
    url: '/profile',
    options: false,
    subMenu: []
  },
  {
    id: 3,
    tittle: 'Configuracion',
    url: '/admin',
    active: false
  },
  {
    id: 4,
    tittle: 'Usuarios',
    url: '/user',
    active: false
  }, */
  {
    id: 1,
    tittle: 'Usuarios',
    options: false,
    subMenu: [
      {
        id: 1,
        tittle: 'Registrar',
        url: '/register'
      },
      {
        id: 2,
        tittle: 'Permisos',
        url: '/user'
      },
      {
        id: 3,
        tittle: 'Pagos',
        url: '/pay-user'
      }
    ]
  },
  {
    id: 1,
    tittle: 'Proveedores',
    options: false,
    subMenu: [
      {
        id: 1,
        tittle: 'Cuentas',
        url: '/purchase'
      },
      {
        id: 2,
        tittle: 'Devoluciones',
        url: '/return'
      },
      {
        id: 3,
        tittle: 'Pagos',
        url: '/payment'
      },
      {
        id: 4,
        tittle: 'Empresas',
        url: '/provider'
      }
    ]
  },
  {
    id: 2,
    tittle: 'Punto de Venta',
    options: false,
    subMenu: [
      {
        id: 1,
        tittle: 'Pedidos',
        url: '/order'
      },
      {
        id: 2,
        tittle: 'Sesiones',
        url: '/daily'
      },
      {
        id: 3,
        tittle: 'Pagos',
        url: '/pay'
      },
      {
        id: 4,
        tittle: 'Clientes',
        url: '/client'
      }
    ]
  },
  {
    id: 3,
    tittle: 'Inventario',
    options: false,
    subMenu: [
      {
        id: 1,
        tittle: 'Productos',
        url: '/product'
      },
      {
        id: 2,
        tittle: 'Recibos',
        url: '/'
      },
      {
        id: 3,
        tittle: 'Entregas',
        url: '/'
      }
    ]
  },
  {
    id: 4,
    tittle: 'Herramientas',
    options: false,
    subMenu: [
      {
        id: 1,
        tittle: 'Tareas',
        url: '/task'
      }
    ]
  },
  {
    id: 5,
    tittle: 'Configuracion',
    options: false,
    subMenu: [
      {
        id: 1,
        tittle: 'Metodos de Pago',
        url: '/pay-method'
      },
      {
        id: 1,
        tittle: 'Categorias de Productos',
        url: '/'
      },
      {
        id: 1,
        tittle: 'Desechar Producto',
        url: '/'
      }
    ]
  } /* ,
  {
    id: 6,
    tittle: 'Productos',
    url: '/product',
    active: false
  },
  {
    id: 7,
    tittle: 'Tareas',
    url: '/task',
    active: false
  },
  {
    id: 8,
    tittle: 'Proveedores',
    url: '/supplier',
    active: false
  },
  {
    id: 9,
    tittle: 'Inventario',
    url: '/stock',
    active: false
  },
  {
    id: 10,
    tittle: 'Recibidos',
    url: '/received',
    active: false
  },
  {
    id: 11,
    tittle: 'Reporte',
    url: '/daily',
    active: false
  },
  {
    id: 12,
    tittle: 'Registro',
    url: '/register',
    active: false
  } */
]
