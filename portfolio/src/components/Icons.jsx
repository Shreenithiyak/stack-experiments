

export const Menu = ({ className = '' }) => (
  <div className={`flex flex-col justify-between w-6 h-4 ${className}`}>
    <span className="w-full h-0.5 bg-current"></span>
    <span className="w-full h-0.5 bg-current"></span>
    <span className="w-full h-0.5 bg-current"></span>
  </div>
);

export const X = ({ className = '' }) => (
  <span className={`text-2xl font-bold leading-none select-none ${className}`}>✕</span>
);

export const Github = ({ className = '', size = 24 }) => (
  <i className={`fa-brands fa-github ${className}`} style={{ fontSize: size }}></i>
);

export const Linkedin = ({ className = '', size = 24 }) => (
  <i className={`fa-brands fa-linkedin ${className}`} style={{ fontSize: size }}></i>
);

export const Mail = ({ className = '', size = 24 }) => (
  <i className={`fa-solid fa-envelope ${className}`} style={{ fontSize: size }}></i>
);

export const ArrowRight = ({ className = '', size = 24 }) => (
  <i className={`fa-solid fa-arrow-right ${className}`} style={{ fontSize: size }}></i>
);

export const CheckCircle2 = (props) => (
  <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 border-current font-bold text-xs select-none ${props.className || ''}`}>
    ✓
  </div>
);

export const Layout = (props) => (
  <div className={`grid grid-cols-2 gap-0.5 w-6 h-6 border-2 border-current p-0.5 rounded-sm ${props.className || ''}`}>
    <div className="bg-current col-span-2"></div>
    <div className="bg-current"></div>
    <div className="bg-current"></div>
  </div>
);

export const Server = (props) => (
  <div className={`flex flex-col gap-1 w-6 h-6 ${props.className || ''}`}>
    <div className="w-full h-1/2 border-2 border-current rounded-sm flex items-center px-1">
      <div className="w-1 h-1 bg-current rounded-full"></div>
    </div>
    <div className="w-full h-1/2 border-2 border-current rounded-sm flex items-center px-1">
      <div className="w-1 h-1 bg-current rounded-full"></div>
    </div>
  </div>
);

export const Database = (props) => (
  <div className={`flex flex-col w-5 h-6 border-2 border-current rounded-md divide-y-2 divide-current ${props.className || ''}`}>
    <div className="h-1/3 w-full"></div>
    <div className="h-1/3 w-full"></div>
    <div className="h-1/3 w-full"></div>
  </div>
);

export const Wrench = (props) => (
  <span className={`font-bold select-none text-xl ${props.className || ''}`}>🔧</span>
);

export const Folder = (props) => (
  <div className={`w-6 h-5 border-2 border-current rounded-sm relative mt-1 ${props.className || ''}`}>
    <div className="absolute -top-1.5 left-0 w-1/2 h-2 border-2 border-b-0 border-current rounded-t-sm"></div>
  </div>
);

export const ExternalLink = (props) => (
  <span className={`font-bold select-none text-xl ${props.className || ''}`}>↗</span>
);

export const GraduationCap = (props) => (
  <span className={`font-bold select-none text-2xl ${props.className || ''}`}>🎓</span>
);

export const Award = (props) => (
  <span className={`font-bold select-none text-2xl ${props.className || ''}`}>🏆</span>
);

export const Phone = (props) => (
  <span className={`font-bold select-none text-xl ${props.className || ''}`}>📞</span>
);

export const MapPin = (props) => (
  <span className={`font-bold select-none text-xl ${props.className || ''}`}>📍</span>
);
