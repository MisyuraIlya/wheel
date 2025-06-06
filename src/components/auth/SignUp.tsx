// components/auth/SignUp.tsx
"use client";

import React, { useState } from "react";
import { useTranslations } from "next-intl";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Alert,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const SignUp: React.FC = () => {
  const t = useTranslations("SignUpPage");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError(t("errors.requiredName"));
      return;
    }
    if (!email) {
      setError(t("errors.requiredEmail"));
      return;
    }
    if (!password || password.length < 6) {
      setError(t("errors.passwordLength"));
      return;
    }
    if (password !== confirmPassword) {
      setError(t("errors.passwordMismatch"));
      return;
    }

    // TODO: להוסיף כאן לוגיקת הרשמה
    console.log("Signing up:", { name, email });
    // לאחר הצלחת ההרשמה, ניתן להפנות או להציג הודעה מתאימה
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 400,
          width: "100%",
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
          {t("title")}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: "100%", mb: 2 }}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: "100%", mt: 1 }}
        >
          <TextField
            label={t("fields.name")}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { fontSize: "0.9rem" },
              "& .MuiOutlinedInput-root": { borderRadius: 1 },
            }}
          />
          <TextField
            label={t("fields.email")}
            type="email"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { fontSize: "0.9rem" },
              "& .MuiOutlinedInput-root": { borderRadius: 1 },
            }}
          />
          <TextField
            label={t("fields.password")}
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { fontSize: "0.9rem" },
              "& .MuiOutlinedInput-root": { borderRadius: 1 },
            }}
          />
          <TextField
            label={t("fields.confirmPassword")}
            type="password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{
              "& .MuiInputLabel-root": { fontSize: "0.9rem" },
              "& .MuiOutlinedInput-root": { borderRadius: 1 },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              py: 1.2,
              borderRadius: 1,
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            {t("actions.signUp")}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;
