'use client';

import styles from '@/app/ui/home.module.css';
import { useForm } from 'react-hook-form';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      className=" min-h-screen  items-center justify-center bg-gradient-to-b from-black to-slate-800 font-medium flex flex-col gap-10"
      onSubmit={onSubmit}
    >
      <h1 className={styles.h1}>RETIRO DE CESANTÍAS</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-white">
            Fecha
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="date"
            id="date"
            {...register('date', { required: true })}
          />
          {errors.date && (
            <span className=" text-sm font-semibold text-red-500 ">
              Fecha es requerido
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-white">
            Nombres
          </label>
          <input
            className="rounded-md ring ring-blue-800 "
            type="text"
            {...register('name', {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
          />

          {errors.name && (
            <span className=" text-sm font-semibold text-red-500 ">
              Nombre es requerido
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-white">
            Apellidos
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="text"
            id="lastName"
            {...register('lastname', {
              required: true,
              minLength: 4,
              maxLength: 20,
            })}
          />
          {errors.lastname && (
            <span className=" text-sm font-semibold text-red-500 ">
              Apellido es requerido
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cedula" className="text-white">
            Cédula
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="number"
            id="cedula"
            {...register('cedula', {
              required: true,
              minLength: 5,
              maxLength: 13,
            })}
          />
          {errors.cedula && (
            <span className=" text-sm font-semibold text-red-500 ">
              Tu cédula es requerida
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="expedicion" className="text-white">
            Expedida en
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="text"
            id="expedicion"
            {...register('expedicion', {
              required: true,
              minLength: 4,
              maxLength: 15,
            })}
          />
          {errors.expedicion && (
            <span className=" text-sm font-semibold text-red-500 ">
              Expedición es requerida
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="destinacion" className="text-white">
            Destinadas para
          </label>
          <select
            className="rounded-md ring ring-blue-800"
            id="destinacion"
            {...register('destinacion', { required: true })}
          >
            {errors.destinacion && (
              <span className=" text-sm font-semibold text-red-500  ">
                La destinación es requerida
              </span>
            )}
            <option value="Vivienda">Compra de vivienda/Lote</option>
            <option value="Mejoras">Mejoras de vivienda</option>
            <option value="Hipotecario">
              Liberación de gravamen hipotecario
            </option>
            <option value="Prestamo">
              Abono préstamo de Vivienda con la Compañía
            </option>
            <option value="Predial">Pago de impuesto predial</option>
            <option value="Educacion">Educación</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="direccion" className="text-white">
            Dirección del predio
          </label>
          <input
            className="rounded-md ring ring-blue-800 "
            type="text"
            id="direccion"
            {...register('direccion', {
              required: true,
              minLength: 5,
              maxLength: 15,
            })}
          />
          {errors.direccion && (
            <span className=" text-sm font-semibold text-red-500 ">
              Dirección es requerida
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="cesantias" className="text-white">
            Fondo de Cesantías
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="text"
            id="cesantias"
            {...register('cesantias', { minLength: 5, maxLength: 20 })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="valor" className="text-white">
            Valor a solicitar
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="number"
            id="valor"
            {...register('valor')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="empresacesantias" className="text-white">
            Cesantías empresa
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="number"
            id="empresacesantias"
            {...register('empresacesantias')}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="documentos" className="text-white">
            Documentos exigidos por ley
          </label>
          <input
            className="rounded-md ring ring-blue-800"
            type="text"
            id="documentos"
            {...register('documentos', { required: true })}
          />
          {errors.documentos && (
            <span className=" text-sm font-semibold text-red-500 ">
              Los documentos son requeridos
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="firma" className="text-white ">
            Firma
          </label>
          <input
            className="rounded-md "
            type="file"
            id="firma"
            {...register('firma', { required: true })}
          />
          {errors.firma && (
            <span className=" text-sm font-semibold text-red-500 ">
              Tu firma es requerida
            </span>
          )}
        </div>
      </div>
      <button type="submit" className={styles.btn}>
        Enviar
      </button>
    </form>
  );
}
