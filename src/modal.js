import './styles/modal.css';
import alertIcon from './assets/icons/alert.svg';
import errorIcon from './assets/icons/error-fino.svg';

export function showModal({
  title = 'Alerta',
  message = '',
  confirmText = 'Aceptar',
  cancelText = 'Cancelar',
  icon = '',
  iconColor = '#000', // Color dinámico para el icono
  onConfirm,
  onCancel,
}) {
  // Definir los SVG de los iconos como cadenas
  const icons = {
    alert: `
      <svg width="86px" height="86px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.8809 16.15C10.8809 16.0021 10.9101 15.8556 10.967 15.7191C11.024 15.5825 11.1073 15.4586 11.2124 15.3545C11.3175 15.2504 11.4422 15.1681 11.5792 15.1124C11.7163 15.0567 11.8629 15.0287 12.0109 15.03C12.2291 15.034 12.4413 15.1021 12.621 15.226C12.8006 15.3499 12.9399 15.5241 13.0211 15.7266C13.1024 15.9292 13.122 16.1512 13.0778 16.3649C13.0335 16.5786 12.9272 16.7745 12.7722 16.9282C12.6172 17.0818 12.4204 17.1863 12.2063 17.2287C11.9922 17.2711 11.7703 17.2494 11.5685 17.1663C11.3666 17.0833 11.1938 16.9426 11.0715 16.7618C10.9492 16.5811 10.8829 16.3683 10.8809 16.15ZM11.2408 13.42L11.1008 8.20001C11.0875 8.07453 11.1008 7.94766 11.1398 7.82764C11.1787 7.70761 11.2424 7.5971 11.3268 7.5033C11.4112 7.40949 11.5144 7.33449 11.6296 7.28314C11.7449 7.2318 11.8697 7.20526 11.9958 7.20526C12.122 7.20526 12.2468 7.2318 12.3621 7.28314C12.4773 7.33449 12.5805 7.40949 12.6649 7.5033C12.7493 7.5971 12.813 7.70761 12.8519 7.82764C12.8909 7.94766 12.9042 8.07453 12.8909 8.20001L12.7609 13.42C12.7609 13.6215 12.6809 13.8149 12.5383 13.9574C12.3958 14.0999 12.2024 14.18 12.0009 14.18C11.7993 14.18 11.606 14.0999 11.4635 13.9574C11.321 13.8149 11.2408 13.6215 11.2408 13.42Z" fill="${iconColor}"/>
        <path d="M12 21.5C17.1086 21.5 21.25 17.3586 21.25 12.25C21.25 7.14137 17.1086 3 12 3C6.89137 3 2.75 7.14137 2.75 12.25C2.75 17.3586 6.89137 21.5 12 21.5Z" stroke="${iconColor}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `,
    errorFino: `
      <svg width="86px" height="86px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>.cls-1{fill:none;stroke:${iconColor};stroke-linecap:round;stroke-linejoin:round;stroke-width:20px;}</style>
        </defs>
        <g data-name="Layer 2" id="Layer_2">
          <g data-name="E410, Error, Media, media player, multimedia" id="E410_Error_Media_media_player_multimedia">
            <circle class="cls-1" cx="256" cy="256" r="246"/>
            <line class="cls-1" x1="371.47" x2="140.53" y1="140.53" y2="371.47"/>
            <line class="cls-1" x1="371.47" x2="140.53" y1="371.47" y2="140.53"/>
          </g>
        </g>
      </svg>
    `,
  };

  const overlay = document.createElement('div');
  overlay.className = 'jrt-modal-overlay';

  const modal = document.createElement('div');
  modal.className = 'jrt-modal';

  // Insertar el icono correspondiente si se pasa
  const iconHTML = icon && icons[icon] ? icons[icon] : '';

  modal.innerHTML = `
    ${iconHTML}
    <h2 class="jrt-modal-title">${title}</h2>
    <p class="jrt-modal-message">${message}</p>
    <div class="jrt-modal-buttons">
      ${cancelText ? `<button class="jrt-modal-btn jrt-modal-cancel">${cancelText}</button>` : ''}
      <button class="jrt-modal-btn jrt-modal-confirm">${confirmText}</button>
    </div>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Event listeners
  modal.querySelector('.jrt-modal-confirm').onclick = () => {
    if (onConfirm) onConfirm();
    overlay.remove();
  };

  const cancelButton = modal.querySelector('.jrt-modal-cancel');
  if (cancelButton) {
    cancelButton.onclick = () => {
      if (onCancel) onCancel();
      overlay.remove();
    };
  }
}
