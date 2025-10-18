'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLoginMutation } from '@/store/auth/authApiSlice';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      await login(data).unwrap();
      router.push('/');
    } catch (error) {
      console.error('Failed to login', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D1821] via-[#4E6E5D] to-[#A44A3F] px-4">
      <div className="bg-[#0D1821]/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-[#AD8A64]/30 hover:shadow-[#AD8A64]/30 transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-[#AD8A64] text-center mb-8 tracking-wide">
          Hey Welcome 👋
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#F5F5F5]/90 mb-1"
            >
              Email Address
            </label>
            <input
              {...register('email')}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border border-[#AD8A64]/40 bg-[#0D1821]/60 text-white placeholder-white/60 focus:border-[#AD8A64] focus:ring-[#AD8A64] focus:ring-2 shadow-sm transition-all duration-200 sm:text-sm px-3 py-2"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-[#A44A3F]">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#4E6E5D] to-[#AD8A64] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="text-center text-sm text-white/80 mt-6">
          use this email to login{' '}
          <p
            className="text-[#AD8A64] font-medium underline underline-offset-4 transition-colors"
          >
            mohammadimrans09t@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
