/* ═══════════════════════════════════════════
   INVENTARIO — 14 productos ecológicos
═══════════════════════════════════════════ */
const INVENTARIO_DEFAULT = [
  {
    id: 1,
    nombre: "Botella Térmica Bambú",
    precio: 34.99,
    categoria: "hogar",
    stock: 12,
    imagen: "https://picsum.photos/seed/bamboo-bottle/600/400.jpg",
    descripcion: "Botella térmica de doble pared fabricada con exterior de bambú natural. Mantiene bebidas calientes 12h y frías 24h. Libre de BPA y 100% reciclable."
  },
  {
    id: 2,
    nombre: "Cargador Solar Portátil",
    precio: 59.95,
    categoria: "tecnología",
    stock: 8,
    imagen: "https://picsum.photos/seed/solar-charger/600/400.jpg",
    descripcion: "Panel solar plegable de 28W con doble puerto USB. Resistente al agua IPX4. Ideal para acampadas y uso outdoor. Carga dos dispositivos simultáneamente."
  },
  {
    id: 3,
    nombre: "Pelota Reciclada Pro",
    precio: 22.50,
    categoria: "deportes",
    stock: 15,
    imagen: "https://picsum.photos/seed/eco-ball/600/400.jpg",
    descripcion: "Pelota de fútbol certificada FIFA Basic fabricada con caucho 100% reciclado. Resistente, duradera y con el rendimiento de una pelota convencional."
  },
  {
    id: 4,
    nombre: "Set Cepillos Cocina Orgánicos",
    precio: 18.75,
    categoria: "hogar",
    stock: 10,
    imagen: "https://picsum.photos/seed/kitchen-brush/600/400.jpg",
    descripcion: "Pack de 4 cepillos de cocina con mangos de madera de haya y cerdas de fibra de coco. Totalmente biodegradables y compostables."
  },
  {
    id: 5,
    nombre: "Auriculares Madera H5",
    precio: 89.00,
    categoria: "tecnología",
    stock: 5,
    imagen: "https://picsum.photos/seed/wood-headphones/600/400.jpg",
    descripcion: "Auriculares Bluetooth 5.3 con carcasa de madera de nogal recuperada. Sonido Hi-Fi con cancelación pasiva. 30h de batería y materiales sustainables."
  },
  {
    id: 6,
    nombre: "Esterilla Yoga Corcho",
    precio: 45.00,
    categoria: "deportes",
    stock: 7,
    imagen: "https://picsum.photos/seed/cork-yoga/600/400.jpg",
    descripcion: "Esterilla de yoga de corcho natural con base de TPE ecológico. Antideslizante, antimicrobiana y sin PVC. Espesor 6mm para máxima comodidad."
  },
  {
    id: 7,
    nombre: "Vela Soja y Canela",
    precio: 16.50,
    categoria: "hogar",
    stock: 0,
    imagen: "https://picsum.photos/seed/soy-candle/600/400.jpg",
    descripcion: "Vela artesanal de cera de soja 100% natural con aroma a canela y vainilla. Mecha de algodón sin plomo. Duración de 45 horas. Envase reutilizable."
  },
  {
    id: 8,
    nombre: "Smartwatch Reciclado E1",
    precio: 129.99,
    categoria: "tecnología",
    stock: 3,
    imagen: "https://picsum.photos/seed/eco-watch/600/400.jpg",
    descripcion: "Reloj inteligente con carcasa de aluminio reciclado y correa de PET regenerado. Monitor cardíaco, GPS integrado y resistencia 5ATM. Batería 14 días."
  },
  {
    id: 9,
    nombre: "Frisbee Bambú Compact",
    precio: 14.90,
    categoria: "deportes",
    stock: 11,
    imagen: "https://picsum.photos/seed/bamboo-frisbee/600/400.jpg",
    descripcion: "Disco volador fabricado con fibra de bambú y resina vegetal. Ultraligero, resistente y aerodinámico. Perfecto para playa, parque y campamentos."
  },
  {
    id: 10,
    nombre: "Jabón Artesanal Lavanda",
    precio: 8.25,
    categoria: "hogar",
    stock: 14,
    imagen: "https://picsum.photos/seed/lavender-soap/600/400.jpg",
    descripcion: "Jabón artesanal en frío con aceite de oliva ecológico y aceite esencial de lavanda. Sin palma, sin parabenos. Embalaje en papel semilla: plántalo."
  },
  {
    id: 11,
    nombre: "Hub USB Bambú 4 Puertos",
    precio: 27.50,
    categoria: "tecnología",
    stock: 9,
    imagen: "https://picsum.photos/seed/bamboo-hub/600/400.jpg",
    descripcion: "Hub USB 3.0 de 4 puertos con carcasa de bambú natural. Transferencias hasta 5 Gbps. Compatible con todos los sistemas operativos. Sin plásticos."
  },
  {
    id: 12,
    nombre: "Cuerda Saltar Algodón",
    precio: 12.00,
    categoria: "deportes",
    stock: 6,
    imagen: "https://picsum.photos/seed/cotton-rope/600/400.jpg",
    descripcion: "Cuerda de saltar con cable de algodón orgánico y mangos de madera de haya. Ajustable en longitud. Rodamientos suaves de acero inoxidable."
  },
  {
    id: 13,
    nombre: "Maceta Autorriego Cerámica",
    precio: 29.90,
    categoria: "hogar",
    stock: 4,
    imagen: "https://picsum.photos/seed/self-pot/600/400.jpg",
    descripcion: "Maceta de cerámica con sistema de autorriego integrado. Depósito de 300ml que mantiene la planta hidratada hasta 2 semanas. Acabado esmaltado artesanal."
  },
  {
    id: 14,
    nombre: "Lámpara Solar Escritorio",
    precio: 42.00,
    categoria: "tecnología",
    stock: 2,
    imagen: "https://picsum.photos/seed/solar-lamp/600/400.jpg",
    descripcion: "Lámpara de escritorio con panel solar integrado y batería de 2000mAh. 3 niveles de brillo LED. Cuerpo de bambú y base de madera recuperada."
  }
];

/* ═══════════════════════════════════════════
   ESTADO DE LA APLICACIÓN
═══════════════════════════════════════════ */
let inventario = [];
let categoriaActiva = "todos";
let busquedaActiva = "";
let productoSeleccionado = null;
let compras = 0;

/* ═══════════════════════════════════════════
   PERSISTENCIA — localStorage
═══════════════════════════════════════════ */
function cargarInventario() {
  const guardado = localStorage.getItem('ecoshop_inventario');
  if (guardado) {
    try {
      inventario = JSON.parse(guardado);
    } catch (e) {
      inventario = JSON.parse(JSON.stringify(INVENTARIO_DEFAULT));
    }
  } else {
    inventario = JSON.parse(JSON.stringify(INVENTARIO_DEFAULT));
  }
  // Cargar compras totales
  compras = parseInt(localStorage.getItem('ecoshop_compras') || '0', 10);
}

function guardarInventario() {
  localStorage.setItem('ecoshop_inventario', JSON.stringify(inventario));
  localStorage.setItem('ecoshop_compras', String(compras));
}

/* ═══════════════════════════════════════════
   TEMA CLARO / OSCURO
═══════════════════════════════════════════ */
function cargarTema() {
  const tema = localStorage.getItem('ecoshop_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', tema);
  const toggle = document.getElementById('themeToggle');
  if (tema === 'light') {
    toggle.classList.add('light');
  } else {
    toggle.classList.remove('light');
  }
}

document.getElementById('themeToggle').addEventListener('click', function() {
  const actual = document.documentElement.getAttribute('data-theme');
  const nuevo = actual === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', nuevo);
  localStorage.setItem('ecoshop_theme', nuevo);
  if (nuevo === 'light') {
    this.classList.add('light');
  } else {
    this.classList.remove('light');
  }
});

/* ═══════════════════════════════════════════
   ESTADÍSTICAS
═══════════════════════════════════════════ */
function actualizarEstadisticas() {
  const totalProductos = inventario.length;
  const valorTotal = inventario.reduce((sum, p) => sum + (p.precio * p.stock), 0);
  const agotados = inventario.filter(p => p.stock === 0).length;
  const unidadesTotal = inventario.reduce((sum, p) => sum + p.stock, 0);

  document.getElementById('statProducts').textContent = totalProductos;
  document.getElementById('statValue').textContent = '$' + valorTotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  document.getElementById('statOutOfStock').textContent = agotados;
  document.getElementById('statUnits').textContent = unidadesTotal;

  // Actualizar contador del carrito
  document.getElementById('cartCount').textContent = compras;
}

/* ═══════════════════════════════════════════
   FILTROS DE CATEGORÍA
═══════════════════════════════════════════ */
function generarFiltros() {
  const categorias = ['todos', ...new Set(inventario.map(p => p.categoria))];
  const contenedor = document.getElementById('filterButtons');
  contenedor.innerHTML = '';

  categorias.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat === categoriaActiva ? ' active' : '');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.setAttribute('data-category', cat);
    btn.addEventListener('click', () => {
      categoriaActiva = cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderizarProductos();
    });
    contenedor.appendChild(btn);
  });
}

/* ═══════════════════════════════════════════
   BUSCADOR EN VIVO
═══════════════════════════════════════════ */
document.getElementById('searchInput').addEventListener('input', function() {
  busquedaActiva = this.value.trim().toLowerCase();
  renderizarProductos();
});

/* ═══════════════════════════════════════════
   FILTRADO COMBINADO
═══════════════════════════════════════════ */
function filtrarProductos() {
  return inventario.filter(p => {
    const coincideCategoria = categoriaActiva === 'todos' || p.categoria === categoriaActiva;
    const coincideBusqueda = p.nombre.toLowerCase().includes(busquedaActiva);
    return coincideCategoria && coincideBusqueda;
  });
}

/* ═══════════════════════════════════════════
   RENDERIZAR PRODUCTOS
═══════════════════════════════════════════ */
function renderizarProductos() {
  const grid = document.getElementById('productsGrid');
  const productosFiltrados = filtrarProductos();
  grid.innerHTML = '';

  if (productosFiltrados.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <i class="fas fa-search"></i>
        <p>No se encontraron productos que coincidan con tu búsqueda.</p>
      </div>
    `;
    return;
  }

  productosFiltrados.forEach((producto, index) => {
    const agotado = producto.stock === 0;
    const seleccionado = productoSeleccionado && productoSeleccionado.id === producto.id;

    // Determinar estado del stock
    let stockClass = 'in-stock';
    let stockText = `${producto.stock} disponibles`;
    if (producto.stock === 0) {
      stockClass = 'no-stock';
      stockText = 'Agotado';
    } else if (producto.stock <= 3) {
      stockClass = 'low-stock';
      stockText = `Solo ${producto.stock} left`;
    }

    const card = document.createElement('article');
    card.className = `product-card${agotado ? ' out-of-stock' : ''}${seleccionado ? ' selected' : ''}`;
    card.style.animationDelay = `${index * 0.06}s`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Ver detalle de ${producto.nombre}`);

    card.innerHTML = `
      <div class="card-img">
        <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
        <span class="card-category">${producto.categoria}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${producto.nombre}</h3>
        <div class="card-price-row">
          <span class="card-price">$${producto.precio.toFixed(2)}</span>
          <span class="card-stock"><span class="stock-dot ${stockClass}"></span>${stockText}</span>
        </div>
        <button class="buy-btn ${agotado ? 'disabled' : 'available'}" 
                ${agotado ? 'disabled' : ''} 
                data-id="${producto.id}"
                aria-label="Comprar ${producto.nombre}">
          <i class="fas ${agotado ? 'fa-ban' : 'fa-shopping-bag'}"></i>
          ${agotado ? 'No disponible' : 'Comprar'}
        </button>
      </div>
    `;

    // Evento click en la tarjeta para abrir detalle
    card.addEventListener('click', (e) => {
      if (e.target.closest('.buy-btn')) return;
      abrirDetalle(producto.id);
    });

    // Evento teclado
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        abrirDetalle(producto.id);
      }
    });

    // Evento click en botón de compra
    const buyBtn = card.querySelector('.buy-btn');
    if (!agotado) {
      buyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        comprarProducto(producto.id);
      });
    }

    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════
   ABRIR PANEL DE DETALLE
═══════════════════════════════════════════ */
function abrirDetalle(id) {
  const producto = inventario.find(p => p.id === id);
  if (!producto) return;

  productoSeleccionado = producto;

  document.getElementById('detailImg').src = producto.imagen;
  document.getElementById('detailImg').alt = producto.nombre;
  document.getElementById('detailCategory').textContent = producto.categoria;
  document.getElementById('detailName').textContent = producto.nombre;
  document.getElementById('detailPrice').textContent = '$' + producto.precio.toFixed(2);
  document.getElementById('detailDesc').textContent = producto.descripcion;
  document.getElementById('detailStock').textContent = producto.stock + ' uds';
  document.getElementById('detailId').textContent = '#' + String(producto.id).padStart(3, '0');

  const btn = document.getElementById('detailBuyBtn');
  if (producto.stock === 0) {
    btn.className = 'detail-buy-btn disabled';
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-ban"></i><span>Producto Agotado</span>';
  } else {
    btn.className = 'detail-buy-btn available';
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-shopping-bag"></i><span>Comprar Ahora</span>';
  }

  // Remover listeners previos clonando el botón
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
  if (producto.stock > 0) {
    newBtn.addEventListener('click', () => {
      comprarProducto(producto.id);
    });
  }

  document.getElementById('detailPanel').classList.add('open');
  document.getElementById('overlay').classList.add('visible');

  // Marcar tarjeta como seleccionada
  renderizarProductos();
}

function cerrarDetalle() {
  document.getElementById('detailPanel').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
  productoSeleccionado = null;
  renderizarProductos();
}

document.getElementById('detailClose').addEventListener('click', cerrarDetalle);
document.getElementById('overlay').addEventListener('click', cerrarDetalle);

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') cerrarDetalle();
});

/* ═══════════════════════════════════════════
   SISTEMA DE COMPRA
═══════════════════════════════════════════ */
function comprarProducto(id) {
  const producto = inventario.find(p => p.id === id);
  if (!producto) return;

  // Prevenir stock negativo
  if (producto.stock <= 0) {
    mostrarToast('Este producto ya no tiene stock disponible.', 'error');
    return;
  }

  // Reducir stock
  producto.stock -= 1;
  compras += 1;

  // Guardar en localStorage
  guardarInventario();

  // Feedback al usuario
  mostrarToast(`Has comprado "${producto.nombre}". Stock restante: ${producto.stock}`, 'success');

  // Animar el contador del carrito
  const countEl = document.getElementById('cartCount');
  countEl.classList.remove('bump');
  // Forzar reflow para reiniciar la animación
  void countEl.offsetWidth;
  countEl.classList.add('bump');

  // Actualizar todo
  actualizarEstadisticas();
  renderizarProductos();

  // Si el detalle está abierto, actualizarlo
  if (productoSeleccionado && productoSeleccionado.id === id) {
    abrirDetalle(id);
  }
}

/* ═══════════════════════════════════════════
   SISTEMA DE TOASTS
═══════════════════════════════════════════ */
function mostrarToast(mensaje, tipo = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${tipo}`;

  let icon = 'fa-check-circle';
  if (tipo === 'warning') icon = 'fa-exclamation-circle';
  if (tipo === 'error') icon = 'fa-times-circle';

  toast.innerHTML = `<i class="fas ${icon}"></i><span>${mensaje}</span>`;
  container.appendChild(toast);

  // Auto-eliminar después de 3.5 segundos
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ═══════════════════════════════════════════
   INICIALIZACIÓN
═══════════════════════════════════════════ */
function init() {
  cargarTema();
  cargarInventario();
  generarFiltros();
  actualizarEstadisticas();
  renderizarProductos();
}

init();