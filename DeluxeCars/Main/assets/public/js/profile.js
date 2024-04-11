// const saveUserData = async (req, res) => {
//     const { nome, usuario, email } = req.body; // Receba os dados do formulário

//     try {
//         // Encontre o usuário no banco de dados com base no ID, você pode usar outra condição para encontrar o usuário
//         const user = await User.findOne({ where: { id: req.user.id } });

//         if (!user) {
//             return res.status(404).json({ message: 'Usuário não encontrado' });
//         }

//         // Atualize os campos desejados do usuário
//         user.nome = nome;
//         user.usuario = usuario;
//         user.email = email;

//         // Salve as alterações no banco de dados
//         await user.save();

//         res.status(200).json({ message: 'Dados do usuário atualizados com sucesso' });
//     } catch (error) {
//         console.error('Erro ao atualizar dados do usuário:', error);
//         res.status(500).json({ message: 'Erro ao atualizar dados do usuário' });
//     }
// };

// module.exports = {saveUserData};