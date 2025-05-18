import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MoneyInput from "./MoneyInput";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01, {
    message: "Amount must be at least 0.01",
  }),
  category: z.enum(categories),
});

export type FormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: FormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      amount: undefined,
    },
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description <span className="text-danger">*</span>
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <MoneyInput
          onChange={(value) =>
            setValue("amount", value, { shouldValidate: true })
          }
          name="amount"
          register={register}
          error={errors.amount?.message}
          label="Amount"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category <span className="text-danger">*</span>
        </label>
        <select {...register("category")} className="form-select">
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
